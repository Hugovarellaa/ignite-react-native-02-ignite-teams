import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonTitle, ButtonTypesStylesProps } from "./styles";

interface Props extends TouchableOpacityProps {
  name: string;
  type?: ButtonTypesStylesProps;
}

export function Button({ name, type = "PRIMARY", ...rest }: Props) {
  return (
    <ButtonContainer {...rest} type={type}>
      <ButtonTitle>{name}</ButtonTitle>
    </ButtonContainer>
  );
}
