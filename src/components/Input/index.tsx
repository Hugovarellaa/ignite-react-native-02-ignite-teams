import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { InputContainer } from "./styles";

interface Props extends TextInputProps {}

export function Input({ ...rest }: Props) {
  const { COLORS } = useTheme();
  return <InputContainer placeholderTextColor={COLORS.GRAY_300} {...rest} />;
}
