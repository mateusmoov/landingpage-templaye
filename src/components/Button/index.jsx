import React from "react";
import * as S from "./styles";

const Button = ({ variant, height, width, children }) => {
  return (
    <S.ButtonContainer variant={variant} height={height} width={width}>
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
