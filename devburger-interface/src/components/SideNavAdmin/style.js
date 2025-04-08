import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.mainBlack};
    padding: 40px 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    img{
        max-width: 200px;

        @media (max-width: 820px){
            max-width: 0;
        }
    }

    @media (max-width: 820px){
        padding: 5px;
        gap: 15px;
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    @media (max-width: 820px){
        gap: 0;
        flex-direction: row;
    }
`;

export const MenuLink = styled(Link)`
    text-decoration: none;
    font-size: 25px;
    color: ${props => props.theme.white};
    background-color: ${props => props.$isActive ? 'purple' : 'none'};
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 820px){
        font-size: 16px;
    }
`;

export const ExitButton = styled.button`
    font-size: 25px;
    display: flex;
    align-items: center;
    padding-left: 35px;
    gap: 20px;
    text-decoration: none;
    color: ${props => props.theme.white};
    width: 100%;
    transition: 0.2s;
    border-radius: 5px;
    background: none;

    &:hover{
        background-color: ${props => props.theme.darkPurple};
    }

    @media (max-width: 820px){
        font-size: 17px;
        width: 150px;
        color: ${props => props.theme.red};
    }
`;