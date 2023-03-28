import { Container, Message } from "./styles";

interface Props {
  title: string;
}

export function ListEmpty({ title }: Props) {
  return (
    <Container>
      <Message>{title}</Message>
    </Container>
  );
}
