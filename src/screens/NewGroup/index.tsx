import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { useState } from "react";
import { Alert } from "react-native";
import { Icon, NewGroupContainer, NewGroupContent } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const { navigate, goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  async function handleCreateGroup() {
    if (group.trim() === "") {
      return Alert.alert("Novo Grupo", "Informe o nome da turma.");
    }

    try {
      await groupCreate(group);
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert(
          "Novo Grupo",
          "Não foi possível criar um nova turma com esse nome, ele ja existir."
        );

        return;
      }
      console.log(err);
    }

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
