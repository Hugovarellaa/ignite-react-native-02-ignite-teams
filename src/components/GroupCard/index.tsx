import { TouchableOpacityProps } from "react-native";
import { GroupCardContainer, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function GroupCard({ title, ...rest }: Props) {
  return (
    <GroupCardContainer {...rest}>
      <Icon />
      <Title>{title}</Title>
    </GroupCardContainer>
  );
}
