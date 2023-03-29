import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const navigation = useNavigation();

  function handleBackPage() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <HighLight
          title="Nova Turma"
          subTitle="crie uma turma para adicionar pessoas"
        />

        <Input placeholder="Nome da turma" />

        <Button title="Criar" />
      </Content>
    </Container>
  );
}
