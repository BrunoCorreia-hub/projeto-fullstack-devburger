import styled from "styled-components";
import bannerHome from '../../assets/bgHome.svg';
import bannerCarroussel from '../../assets/bgcarroussel.svg';

export const  Banner = styled.div`
    background: url('${bannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;

    h1{
        position: absolute;
        right: 20%;
        top: 15%;
        font-family: Road Rage;
        color: #fff;
        font-size: 100px;
        font-weight: 550;
    }
`;

export const Container = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${bannerCarroussel}');
   // height: 100vh; //depois tirar esse heigth pois os carrosseis vao completar a tela
    padding: 20px 75px;
`;

export const Content = styled.div``;