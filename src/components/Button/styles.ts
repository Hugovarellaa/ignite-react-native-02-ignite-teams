import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypesStylesProps = "PRIMARY" | "SECONDARY";

interface Props {
  type: ButtonTypesStylesProps;
}

export const ButtonContainer = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px;
`;

export const ButtonTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
