import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    background-color: #fff;
    border-radius: 17px;
    cursor: grab;
    padding: 20px;
    box-shadow: 0 0 10px black;
    position: relative;

    div{
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
        margin-top: 50px;

        p{
            color: #ff8c05;
            font-size: 18px;
            font-weight: 600;
        }

        strong{
            font-size: 27px;
        }
    }

    @media (max-width: 768px) {
        width: 280px;
    }
`;

export const CardImage = styled.img`
    height: 110px;
    position: absolute;
    top: -50px;
    border-radius: 100%;

`;