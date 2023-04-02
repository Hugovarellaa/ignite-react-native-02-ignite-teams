import { ButtonIcon } from "@components/ButtonIcon";
import { Form } from "@components/ButtonIcon/styles";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { Input } from "@components/Input";
import { PlayersContainer } from "./styles";

export function Players() {
  return (
    <PlayersContainer>
      <Header showBackButton />

      <HighLight
        title="Nome da turma"
        subTitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <Filter title="Time A" isActive />
    </PlayersContainer>
  );
}
