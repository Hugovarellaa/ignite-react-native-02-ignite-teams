import { HeaderContainer, HeaderLogo } from "./styles";

import logo from "@assets/logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo source={logo} />
    </HeaderContainer>
  );
}
