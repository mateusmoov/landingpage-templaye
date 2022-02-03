import { Navbar, MainHero } from "@/components";
import * as S from "./styles";

const LandingPage = () => {
  return (
    <>
      <S.MainContainer>
        <Navbar />
        <MainHero />
      </S.MainContainer>
    </>
  );
};

export default LandingPage;
