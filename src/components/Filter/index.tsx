import { TouchableOpacityProps } from "react-native";
import { FilterContainer, FilterStyleProps, Title } from "./styles";

interface Props extends TouchableOpacityProps, FilterStyleProps {
  title: string;
}

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <FilterContainer {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </FilterContainer>
  );
}
