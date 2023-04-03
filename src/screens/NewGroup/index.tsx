import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Icon, NewGroupContainer, NewGroupContent } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const { navigate, goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  function handleCreateGroup() {
    navigate("Players", { group });
  }

  return (
    <NewGroupContainer>
      <Header showBackButton onPress={handleGoBack} />

      <NewGroupContent>
        <Icon />
        <HighLight
          title="Nova Turma"
          subTitle="crie uma turma para adicionar pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button name="Criar" onPress={handleCreateGroup} />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
