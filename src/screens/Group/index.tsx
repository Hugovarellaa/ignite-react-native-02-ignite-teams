import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ListEmpty } from "@components/ListEmpty";
import { Loading } from "@components/Loading";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupGetAll } from "@storage/group/groupGetAll";
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { GroupContainer } from "./styles";

export function Group() {
  const [isLoading, setIsLoading] = useState(true);

  const [groups, setGroups] = useState<string[]>([]);

  const { navigate } = useNavigation();

  function handleAddGroup() {
    navigate("NewGroup");
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);

      const data = await groupGetAll();
      setGroups(data);
    } catch (err) {
      Alert.alert("Turmas", "Ops!, nao foi possível carrega as turmas");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigate("Players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <GroupContainer>
      <Header />

      <HighLight title="Turmas" subTitle="jogue com a sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={
            <ListEmpty message="Que tal cadastrar a primeira turma" />
          }
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button name="Criar nova turma" onPress={handleAddGroup} />
    </GroupContainer>
  );
}
