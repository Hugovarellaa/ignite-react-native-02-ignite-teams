import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import {
  ButtonIconContainer,
  ButtonIconTypesStylesProps,
  Icon,
} from "./styles";

interface Props extends TouchableOpacityProps {
  type?: ButtonIconTypesStylesProps;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonIcon({ type = "PRIMARY", icon, ...rest }: Props) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon name={icon} type={type} />
    </ButtonIconContainer>
  );
}
