import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { Icon, NewGroupContainer, NewGroupContent } from "./styles";

export function NewGroup() {
  return (
    <NewGroupContainer>
      <Header showBackButton />

      <NewGroupContent>
        <Icon />
        <HighLight
          title="Nova Turma"
          subTitle="crie uma turma para adicionar pessoas"
        />

        <Input />
        <Button name="Criar" />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
