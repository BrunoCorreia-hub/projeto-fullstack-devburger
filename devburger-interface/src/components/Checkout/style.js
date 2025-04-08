import styled from "styled-components";
import BannerCart from '../../assets/bannerCart.svg';
import BgMenu from '../../assets/bgMenu.svg';
import { Link } from "react-router-dom";

export const Container = styled.div`
    background: url('${BgMenu}');

    h2{
        margin-top: 100px;
        text-align: center;
        color: #61A120;
        font-size: 30px;

        &::after{
        content: '';
        position: absolute;
        top: 38%;
        left: calc(50% - 30px);
        width: 60px;
        height: 5px;
        background-color: #61A120;

        @media (max-width: 720px){
            top: 42%;
        }
    }
    }
`;

export const Banner = styled.div`
    background: url('${BannerCart}');
    background-size: cover;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 80px;

    img{
        max-width: 180px;

        @media (max-width: 720px){
            margin-top: 70px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
    height: 525px;

    h3{
        color: #9758A6;
        font-size: 45px;
        font-weight: 600;
    }

    p{
        font-size: 20px;
        text-align: center;
    }
`;

export const ContentLink = styled(Link)`
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover{
        opacity: 0.7;
    }
`;