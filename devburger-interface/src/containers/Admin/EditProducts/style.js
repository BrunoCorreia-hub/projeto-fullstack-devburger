import styled from "styled-components";
import ReactSelect from 'react-select';
import { Button } from '../../../components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    background-color: ${props => props.theme.black};
    height: 670px;
    width: 450px;
    border-radius: 9px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const LabelInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    label{
        color: ${props => props.theme.white};
        font-size: 20px;
    }
    input{
        height: 50px;
        padding: 20px;
        font-size: 20px;
        font-weight: 550;
        border-radius: 8px;
        border: none;
    }
`;

export const LabelUpload = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border: 2px dashed ${props => props.theme.white};
    padding: 15px;
    border-radius: 5px;
`;

export const Select = styled(ReactSelect)``;

export const InputUpload = styled.input`
    display: none;
`;

export const ButtonSubmit = styled(Button)`
    margin-top: 25px;
`;

export const ErrorMensage = styled.p`
     color: ${props => props.theme.red};
`;

export const CheckoutOffer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    input{
       width: 20px;
       cursor: pointer;
    }

    p{
        color: ${props => props.theme.white};
        font-size: 17px;
    }
`;