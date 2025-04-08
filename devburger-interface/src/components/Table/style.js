import styled from "styled-components";

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 20px;
    background-color: #cdcdcd;
    min-height: 450px;

    @media (max-width: 720px){
        width: 380px;
    }
`;

export const Header = styled.thead``;

export const Body = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    padding: 20px;
    background-color: #333232;
    text-align: left;
    color: #fff;

    &:first-child{
        border-top-left-radius: 15px;
    }

    &:last-child{
        border-top-right-radius: 15px;
    }
    
    @media (max-width: 720px){
        font-size: 12px;
        padding: 8px;
    }
`;

export const Td = styled.td`
    padding: 15px;
    font-weight: 600;
    line-height: 115%;

    @media (max-width: 720px){
        padding: 5px;
        font-size: 10px;
    }
`;