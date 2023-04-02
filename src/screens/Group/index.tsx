import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ListEmpty } from "@components/ListEmpty";
import { useState } from "react";
import { FlatList } from "react-native";
import { GroupContainer } from "./styles";

export function Group() {
  const [groups, setGroups] = useState<string[]>([
    // "Galera da Rocketseat",
    // "Galera do Lolzinho",
  ]);
  return (
    <GroupContainer>
      <Header />

      <HighLight title="Turmas" subTitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma" />
        }
      />
    </GroupContainer>
  );
}
