import styled from "styled-components";

export const Container = styled.footer`
    background-color: #5C2669;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 49px;
    
    p{
        color: #fff;
        font-size: 17px;
    }

    @media (max-width: 768px) {
        p{
            font-size: 12px;
        }
    }
`;