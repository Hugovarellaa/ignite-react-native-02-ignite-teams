import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";

import { Alert, FlatList, TextInput } from "react-native";
import { Form, HeaderList, NumberOfPlayers, PlayersContainer } from "./styles";

import { Loading } from "@components/Loading";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { PlayerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { AppError } from "@utils/AppError";

interface RouteParams {
  group: string;
}

export function Players() {
  const [isLoading, setIsLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const router = useRoute();
  const { group } = router.params as RouteParams;

  const { navigate } = useNavigation();

  const newPlayerNameInputRef = useRef<TextInput>(null);

  function handleGoBack() {
    navigate("Group");
  }

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova pessoa",
        "Informe o nome da pessoa para adicionar."
      );
    }
    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await PlayerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur(); //Retirar o focus
      setNewPlayerName("");
      await fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        Alert.alert("Nova pessoa", "Não foi possível adicionar.");
        console.log(error);
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true);

      const playersByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (e) {
      console.log(e);
      Alert.alert(
        "Pessoas",
        "Não foi possível carregar as pessoas do time selecionada!"
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      await fetchPlayersByTeam();
    } catch (error) {
      Alert.alert("Remover pessoa", "Não foi possível remove esta pessoa!");
      console.log(error);
    }
  }

  async function handleRemoveGroup() {
    Alert.alert("Remover pessoa", "Deseja remove essa turma?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async () => groupRemove(),
      },
    ]);
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigate("Group");
    } catch (error) {
      Alert.alert("Remover pessoa", "Não foi possível remove esta pessoa!");
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <PlayersContainer>
      <Header showBackButton onPress={handleGoBack} />

      <HighLight title={group} subTitle="adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B", "Time C"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handleRemovePlayer(item.name)}
            />
          )}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 },
          ]}
          ListEmptyComponent={<ListEmpty message="Nao há pessoas nesse time" />}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button
        name="Remover turma"
        type="SECONDARY"
        onPress={handleRemoveGroup}
      />
    </PlayersContainer>
  );
}
