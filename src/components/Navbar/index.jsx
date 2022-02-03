import * as S from "./styles";
import { Button } from "@/components";
import Logo from "@/assets/logos/logo-dark.png";

const Navbar = () => {
  return (
    <S.Navbar>
      <S.NavbarContainer>
        <S.ImageContainer>
          <img src={Logo} alt="logo" width="183px" />
        </S.ImageContainer>
        <S.NavWrapper>
          <a href="/">Home</a>
          <a href="/">Product</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </S.NavWrapper>
        <Button variant="secondary" height="52px" width="139px">
          Login
        </Button>
      </S.NavbarContainer>
    </S.Navbar>
  );
};

export default Navbar;
