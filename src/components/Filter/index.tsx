import { TouchableOpacityProps } from "react-native";
import { Container, FilterStylesProps, Title } from "./styles";

interface Props extends TouchableOpacityProps, FilterStylesProps {
  title: string;
}

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  );
}
