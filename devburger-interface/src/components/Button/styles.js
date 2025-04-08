import styled from "styled-components";

export const ContainerButton = styled.button`
    background-color: #9758A6;
    width: 100%;
    height: 50px;
    font-family: Road Rage;
    font-size: 40px;
    border: none;
    border-radius: 8px;
    transition: 0.2s;
    color: ${props => props.theme.white};

    &:hover{
        transform: scale(1.1);
    }

    &:active{
        opacity: 0.7;
    }
`;