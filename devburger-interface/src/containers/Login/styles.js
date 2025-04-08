import styled from "styled-components";
import Background from '../../assets/bg.svg';
import Bg from '../../assets/bg2.svg';
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media (max-width: 880px){
        flex-direction: column;
        margin: 0 auto;
    }
`;

export const BannerLogo = styled.div`
    background: url('${Background}');
    background-size: cover;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px){
        img{
            max-width: 170px;
        }
    }
`;

export const ContainerInput = styled.div`
    background: url('${Bg}');
    background-color: rgba(0, 0, 0, 0.9);
    background-size: cover;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;

    p{
        color: #fff;
        font-size: 25px;
    }

    @media (max-width: 800px){
        padding: 17px;
    }
`;

export const Paragraph = styled.h1`
    color: #fff;
    font-family: Road Rage;
    font-size: 60px;
    font-weight: 400;

    span{
        color:  #9758A6;
        font-family: Road Rage;
    }

    @media (max-width: 800px){
        font-size: 30px;
    }
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 10px;

    input {
        height: 50px;
        border-radius: 10px;
        padding: 0 15px;
        font-size: 25px;
        font-weight: 600;
    }
    p{
        color: #c90a02;
        font-weight: 500;
        font-size: 18px;
        height: 15px;
    }
    
`;

export const Label = styled.label`
        color: #fff;
        font-size: 30px;
        font-weight: 500;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 35px;

    @media (max-width: 800px){
       gap: 17px;
    }
`;

export const LinkNav = styled(Link)`
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    transition: 0.2s;

    &:hover{
        opacity: 0.5;
    }
`;