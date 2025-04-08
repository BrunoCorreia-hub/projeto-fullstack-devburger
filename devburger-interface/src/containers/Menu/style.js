import styled from "styled-components";
import BannerMenu from '../../assets/bannerMenu.svg';
import BgMenu from '../../assets/bgMenu.svg';
import { Link } from "react-router-dom";

export const Container = styled.div`
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${BgMenu}');
`;

export const Banner = styled.div`
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('${BannerMenu}');
    height: 480px;
    background-size: cover;

    h3{
        position: absolute;
        right: 20%;
        top: 9%;
        font-size: 96px;
        font-weight: 500;
        line-height: 78px;
        font-family: 'Road Rage', sans-serif;
        text-align: center;
        color: #FFFFFF;

        @media (max-width: 768px) {
            font-size: 50px;
            line-height: 110%;
            margin-top: 50px;
            right: 28%;
        }
    }

    p{
        position: absolute;
        right: 19%;
        top: 37%;
        font-size: 25px;
        color: #fff;
        font-weight: 600;

        @media (max-width: 768px) {
            right: 7%;
        }
    }

`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 80px;
    margin-top: 30px;

    @media (max-width: 850px) {
        gap: 35px;
    }

    @media (max-width: 690px) {
        gap: 10px;
    }
`;

export const CategoryButton = styled(Link)`
    font-size: 30px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    color: ${props => props.$isActiveCategory ? 'green' : 'purple'};
    padding: 0 7px;
    border-radius: 35px;
    box-shadow: ${props => props.$isActiveCategory && '-1px 8px 9px green'};
    transform: ${props => props.$isActiveCategory && 'scale(1.1)'};
    transition: 0.3s;

    @media (max-width: 840px) {
        font-size: 18px;
        border-bottom: ${props => props.$isActiveCategory && '2px solid green'};
        box-shadow: none;
        padding: 0 0 2px;
        border-radius: 0;
        font-weight: 650;
    }

    @media (max-width: 690px) {
        font-size: 10px;
    }
`;

export const ProductsMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
    padding: 40px 60px 20px;
    margin: 60px 60px 0;

    @media (max-width: 820px) {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
    }

    @media (max-width: 690px) {
        grid-template-columns: 1fr;
        justify-content: center;
    }
`;