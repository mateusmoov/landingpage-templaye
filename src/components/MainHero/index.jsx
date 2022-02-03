import { Button } from "@/components";
import Screen1 from "@/assets/images/screen1.png";
import * as S from "./styles";

const MainHero = () => {
  return (
    <S.MainContainer>
      <S.MainTextContainer>Work at the speed of thought</S.MainTextContainer>
      <S.SubtitleContainer>
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </S.SubtitleContainer>
      <S.ButtonContainer>
        <Button variant="primary" height="65px" width="185px">
          Try for free
        </Button>
        <Button variant="secondary" height="65px" width="185px">
          Learn more
        </Button>
      </S.ButtonContainer>
      <img src={Screen1} alt="Interface 1" width="1500px" />
    </S.MainContainer>
  );
};

export default MainHero;
