import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

export function Group() {
  const [groups, setGroups] = useState<string[]>([
    // "Galera da Rocketseat",
    // "Galera do Jiu-jitsu",
  ]);

  const navigation = useNavigation();

  function handleCreateNewGroup() {
    navigation.navigate("group");
  }

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subTitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty title="Que tal cadastrar a primeira turma?" />
        }
      />

      <Button title="Criar nova turma" onPress={handleCreateNewGroup} />
    </Container>
  );
}
