import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
font-family: Montserrat;
font-weight: 500;
font-size: 17px;
color: white;
height: ${(props) => props.height};
width: ${(props) => props.width};
${(props) => props.variant === "primary" && css`
background-color: #4452FE;
border: none;
`}

${(props) => props.variant === "secondary" && css`
background-color: #181818;
border: 1px solid white;
`}
`