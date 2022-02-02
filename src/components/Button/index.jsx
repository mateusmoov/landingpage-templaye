import React from "react"
import * as S from "./styles";

const Button = ({variant, height, width}) => {
   return (
       <S.ButtonContainer variant={variant} height={height} width={width}>
           Button
       </S.ButtonContainer>
   )
}

export default Button