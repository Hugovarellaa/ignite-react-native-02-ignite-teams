import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypesStyleProps, Container, Icon } from "./styles";

interface Props extends TouchableOpacityProps {
  type?: ButtonIconTypesStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap; //Tipagem ícones do material-icons
}

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
