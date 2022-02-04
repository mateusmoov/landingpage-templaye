import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


export const ImageCardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 80px;
margin-right: 27px;
`

export const TextContainer = styled.div`
font-family: Montserrat;
text-align: center;
width: 636px;
margin-top: 162px;
color: white;

    h1{
    font-size: 52px;
    font-weight: 400;
}

    p{
    font-size: 20px;
}
`

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
width: 270px;
color: white;
`

export const CardTextTitle = styled.div`
font-family: Montserrat;
display: flex;
line-height: 30px;

p {
    font-size: 20px;
    font-weight: 500;
}

img{
    margin-right: 10px;
}
`

export const CardTextSubtitle = styled.div`
font-family: Montserrat;
display: flex;
font-size: 20px;
line-height: 30px;

p {
    font-size: 16px;
}

img{
    margin-right: 10px;
}
`

export const Card = styled.div`
display: flex;
flex-direction: column;

`