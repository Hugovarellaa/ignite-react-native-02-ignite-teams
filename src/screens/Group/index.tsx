import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ListEmpty } from "@components/ListEmpty";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

export function Group() {
  const [groups, setGroups] = useState<string[]>([
    // "Galera da Rocketseat",
    // "Galera do Jiu-jitsu",
  ]);

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subTitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty title="Que tal cadastrar a primeira turma?" />
        }
      />

      <Button title="Criar nova turma" />
    </Container>
  );
}
