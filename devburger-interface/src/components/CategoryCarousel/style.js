import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    margin-bottom: 30px;
`;

export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    color: #9758A6;
    padding-bottom: 12px;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        width: 60px;
        height: 5px;
        background-color: #9758A6;
        bottom: 0;
        left: calc(50% - 30px);
    }
`;

export const ContainerItems = styled.div`
    background: url(${props => props.imageUrl});
    background-position: center;
    background-size: cover;
    margin: 10px 50px;
    height: 280px;
    width: 490px;
    border-radius: 8px;
    box-shadow: 0 0 10px black;

    @media (max-width: 820px) {
    margin: 10px auto; /* Centraliza horizontalmente */
    width: 90%;        /* Faz o item se ajustar melhor à tela menor */
  }

  @media (max-width: 480px) {
    height: 220px;       /* Ajuste opcional pro mobile */
    width: 95%;
  }

`;

export const NavLink = styled(Link)`
    color: #fff;
    font-weight: 700;
    font-size: 35px;
    text-decoration: none;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
    padding: 0 10px;
    border-radius: 25px;
    position: absolute;
    top: 70%;
    left: 75px;
    transition: 0.2s;

    &:hover{
        box-shadow: 0 9px 0 #9758A6;
        background: none;
        color: #9758A6;
    }

    @media (max-width: 820px) {
        font-size: 20px;
        margin-left: -50px;
    }

    @media (max-width: 768px) {
       font-size: 25px;
       margin-left: -40px;
    }
`;