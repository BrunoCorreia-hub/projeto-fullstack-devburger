import styled from "styled-components";
import BannerCart from '../../assets/bannerCart.svg';
import BgMenu from '../../assets/bgMenu.svg';

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
        background-color: #9758A6;

        @media (max-width: 850px){
            top: 30%;
        }

        @media (max-width: 600px){
            top: 37%;
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
    display: grid;
    grid-template-columns: 1fr 25%;
    gap: 40px;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;

    @media (max-width: 860px){
        grid-template-columns: 1fr;
        padding: 25px;
        margin: 0 auto;
    }

    @media (max-width: 720px){
        grid-template-columns: 1fr;
        padding: 25px;
        margin: 0 auto;
    }
`;