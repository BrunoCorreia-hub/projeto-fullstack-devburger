import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductImg = styled.img`
    max-width: 130px;
    background-color: #fff;
    border-radius: 12px;
    padding: 10px;

    @media (max-width: 720px){
        max-width: 70px;
        padding: 0;
    }
`;

export const QuantityButton = styled.div`
    display: flex;
    gap: 25px;

    button{
        background-color: #9758A6;
        font-size: 15px;
        width: 25px;
        border: none;
        border-radius: 3px;
        font-weight: 700;
        transition: 0.2s;

        &:hover{
            transform: scale(1.1);
        }
    }

    @media (max-width: 720px){
        flex-direction: column;
        gap: 8px;
        align-items: center;
    }
`;

export const EmptyCar = styled.p`
    text-align: center;
    font-weight: 600;
    font-size: 30px;
`;

export const TotalPrice = styled.h3`
    font-size: 20px;

    @media (max-width: 720px){
        font-size: 10px;
    }
`;

export const AddProduct = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 17px;

    &:hover{
        opacity: 0.7;
    }

    @media (max-width: 720px){
        font-size: 8px;
    }
`;