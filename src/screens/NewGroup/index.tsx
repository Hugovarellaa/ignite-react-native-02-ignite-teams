import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <HighLight
          title="Nova Turma"
          subTitle="crie uma turma para adicionar pessoas"
        />

        <Button title="Criar" />
      </Content>
    </Container>
  );
}
