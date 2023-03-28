import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Container } from "./styles";

export function Group() {
  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subTitle="jogue com a sua turma" />
    </Container>
  );
}
