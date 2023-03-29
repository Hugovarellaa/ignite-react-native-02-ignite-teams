import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type FilterStylesProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStylesProps>`
  border: 1px solid
    ${({ theme, isActive }) =>
      isActive ? theme.COLORS.GREEN_700 : "transparent"};

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;

  margin-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  text-transform: uppercase;
`;
