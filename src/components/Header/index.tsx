import logo from "@assets/logo.png";
import { TouchableOpacityProps } from "react-native";
import { BackButton, BackIcon, HeaderContainer, HeaderLogo } from "./styles";

interface Props extends TouchableOpacityProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false, ...rest }: Props) {
  return (
    <HeaderContainer>
      {showBackButton && (
        <BackButton {...rest}>
          <BackIcon />
        </BackButton>
      )}
      <HeaderLogo source={logo} />
    </HeaderContainer>
  );
}
