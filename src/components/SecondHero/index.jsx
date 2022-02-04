import * as S from "./styles";
import Screen2 from "@/assets/images/screen2.png";
import Restaurant from "@/assets/icons/restaurant.svg";
import Alien from "@/assets/icons/alien.svg";
import Infinite from "@/assets/icons/infinite.svg";

const SecondHero = () => {
  return (
    <S.MainContainer>
      <S.TextContainer>
        <h1>FEATURES</h1>
        <p>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </S.TextContainer>
      <S.ImageCardContainer>
        <div>
          <img src={Screen2} alt="Screen 2" />
        </div>
        <S.Card>
          <S.CardContainer>
            <S.CardTextTitle>
              <img src={Restaurant} alt="restaurant" />
              <p>A single source of truth</p>
            </S.CardTextTitle>
            <S.CardTextSubtitle>
              <p>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </S.CardTextSubtitle>
          </S.CardContainer>

          <S.CardContainer>
            <S.CardTextTitle>
              <img src={Alien} alt="Alien" />
              <p>Intuitive interface</p>
            </S.CardTextTitle>
            <S.CardTextSubtitle>
              <p>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </S.CardTextSubtitle>
          </S.CardContainer>

          <S.CardContainer>
            <S.CardTextTitle>
              <img src={Infinite} alt="Infinite" />
              <p>Or with rules</p>
            </S.CardTextTitle>
            <S.CardTextSubtitle>
              <p>
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </S.CardTextSubtitle>
          </S.CardContainer>
        </S.Card>
      </S.ImageCardContainer>
    </S.MainContainer>
  );
};

export default SecondHero;
