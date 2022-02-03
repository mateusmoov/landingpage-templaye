import styled from "styled-components"

export const Navbar = styled.div`
display: flex;
justify-content: center;
height: 119px;
`

export const NavbarContainer = styled.div`
width: 1097px;
display: flex;
justify-content: center;
align-items: center;
`

export const ImageContainer = styled.div`
margin-right: 124px;
`

export const NavWrapper = styled.div`
a{
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    color: white;
    text-decoration: none;
    margin-right: 41px;

    &:last-child{
        margin-right: 168px;
    }
}

`