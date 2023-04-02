import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonIconTypesStylesProps = "PRIMARY" | "SECONDARY";

interface Props {
  type: ButtonIconTypesStylesProps;
}

export const Form = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.GRAY_700};
  flex-direction: row;

  justify-content: center;
  border-radius: 6px;
`;

export const ButtonIconContainer = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  align-items: center;
  justify-content: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;
