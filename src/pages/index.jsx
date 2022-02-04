import { Navbar, MainHero, SecondHero } from "@/components";
import * as S from "./styles";

const LandingPage = () => {
  return (
    <>
      <S.MainContainer>
        <Navbar />
        <MainHero />
        <SecondHero />
      </S.MainContainer>
    </>
  );
};

export default LandingPage;
