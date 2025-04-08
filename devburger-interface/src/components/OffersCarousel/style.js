import styled from "styled-components";

export const Container = styled.div`
    .carousel-item{
        padding-right: 40px;
    }

    margin-bottom: 50px;
    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }
    padding-bottom: 12px;
`;

export const Title = styled.h1`
    text-align: center;
    color: green;
    margin-bottom: 80px;
    text-transform: uppercase;

    &::after{
        content: '';
        position: absolute;
        bottom: -7%;
        left: calc(50% - 30px);
        width: 60px;
        height: 5px;
        background-color: green;

        @media (max-width: 768px) {
            bottom: 20px;
        }
    }

`;