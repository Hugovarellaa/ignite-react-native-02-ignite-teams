import logo from "@assets/logo.png";

import { BackButton, BackIcon, HeaderContainer, HeaderLogo } from "./styles";

interface Props {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <HeaderContainer>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <HeaderLogo source={logo} />
    </HeaderContainer>
  );
}
