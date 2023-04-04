import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { InputContainer } from "./styles";

interface Props extends TextInputProps {
  inputRef?: React.RefObject<TextInput>;
}

export function Input({ inputRef, ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <InputContainer
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
      ref={inputRef}
    />
  );
}
