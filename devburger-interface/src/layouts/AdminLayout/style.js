import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 20% 1fr;

    @media (max-width: 820px){
        grid-template-columns: 1fr;
    }
    
    main{
        padding: 50px;
        width: 100%;
        height: 100vh;
        background-color: ${props => props.theme.lightGray};
        overflow-y: auto;

        @media (max-width: 850px){
            padding: 0;
        }
    }
    section{
        margin: 0 auto;
        padding: 20px;
        max-width: 1200px;
        width: 100%;
    }
`;