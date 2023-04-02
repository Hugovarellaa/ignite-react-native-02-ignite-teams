import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { GroupContainer } from "./styles";

export function Group() {
  return (
    <GroupContainer>
      <Header />

      <HighLight title="Turmas" subTitle="jogue com a sua turma" />

      <GroupCard title="Nome da turma" />
      <GroupCard title="Nome da turma" />
    </GroupContainer>
  );
}
