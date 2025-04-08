import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    background-color: #1F1F1F;
    display: flex;
    justify-content: space-around;
    padding: 12px;
    position: fixed;
    width: 100%;
    z-index: 2;

    @media (max-width: 800px){
       flex-direction: column;
       align-items: center;
    }
`;

export const Navigation = styled.div`
    display: flex;
    gap: 25px;
    align-items: center;
    position: relative;

    p{
        color: #fff;
        font-size: 30px;
        font-weight: 100;
    }

    @media (max-width: 800px){
       justify-content: center;
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    color: ${props => props.$isActive && '#9758A6'};
    font-size: ${props => props.$isActive ? '25px' : '17px'};
    transition: 0.2s;
`;

export const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 450px;

    .container-login{
        display: flex;
        align-items: center;
        gap: 10px;

        p{
            color: #fff;
        }

        span{
            color: #9758A6;
            font-weight: 600;
            font-size: 20px;
        }
    }

    .container-cart{
        display: flex;
        align-items: center;
    }

    @media (max-width: 800px){
       justify-content: center;
       gap: 80px;
    }

    .container-clickboard{
        display: flex;
        align-items: center;
    }
`;

export const ButtonExit = styled.button`
    background: none;
    border: none;
    color: red;
    font-size: 17px;
    text-transform: uppercase;
    transition: 0.2s;

    &:hover{
        opacity: 0.5;
        transform: scale(1.1);
    }
`;

export const CartButton = styled(Link)`
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    padding: 0 10px;
    border-radius: 5px;
    color: ${props => props.$isActive && '#9758A6'};
    font-weight: ${props => props.$isActive && '800'};
    box-shadow: ${props => props.$isActive && '0 5px 3px #9758A6'};

    &:hover{
        opacity: 0.7;
    }
`;

export const Count = styled.div`
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    font-weight: 680;
    color: white;
    position: relative;
    right: 32px;
    top: 4px;
`;
