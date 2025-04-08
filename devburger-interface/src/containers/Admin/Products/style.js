import styled from "styled-components";

export const ProductImage = styled.img`
    max-width: 130px;
    border-radius: 10px;
    background-color: ${props => props.theme.darkGray};
    border-radius: 10px;
    padding: 8px;

    @media (max-width: 610px){
       max-width: 90px;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 600;
`;

export const EditButton = styled.button`
    background: none;
    border: none;
    transition: 0.2s;
    padding: 8px;
    background-color: ${props => props.theme.lightGray};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        transform: scale(1.2);
    }
`;