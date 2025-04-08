import  select  from 'react-select';
import styled from "styled-components";

export const Container = styled.div`
    padding: 50px;
    background-color: ${props => props.theme.lightGray};
`;

export const ImageCard = styled.img`
    max-width: 100px;
`;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 600;
`;

export const StatusSelect = styled(select)`
    margin-right: 20px;

    @media (max-width: 850px){
        margin-right: 0;
        font-size: 13px;
        font-weight: 650;
        width: 180px;
    }

    @media (max-width: 610px){
        margin-right: 0;
        font-size: 13px;
        width: 180px;
    }
`;

export const Filter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 25px;
    
    @media (max-width: 820px){
        gap: 15px;
    }
`;

export const FilterOption = styled.button`
    background: transparent;
    font-size: 20px;
    border: none;
    padding: 0 10px;
    font-weight: 550;
    border-radius: 10px;
    box-shadow: ${props => props.$isActive && '0 5px 0 purple'};
    transform: scale(${props => props.$isActive && '1.2'});
    transition: 0.2s;

    @media (max-width: 850px){
        font-size: 15px;
        font-weight: 680;
        border-bottom: ${props => props.$isActive && '2px solid purple'};
        box-shadow: none;
        border-radius: 2px;
        padding: 1px;
    }

    @media (max-width: 610px){
        font-size: 10px;
        font-weight: 680;
        border-bottom: ${props => props.$isActive && '2px solid purple'};
        box-shadow: none;
        border-radius: 2px;
        padding: 1px;
    }
`;