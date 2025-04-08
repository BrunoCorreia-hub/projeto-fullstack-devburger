import styled from "styled-components";

export const Container = styled.div`
    background-color: #cdcdcd;
    height: 370px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 25px;

    .container-top{
        display: grid;
        grid-gap: 20px;
        grid-template-areas: 
        'title title'
        'item item-price'
        'tax-delivery tax-delivery-price';

        .title{
            grid-area: title;
            width: 100%;
            background-color: #333232;
            color: #fff;
            font-size: 25px;
            padding: 15px;
            text-align: center;
            font-weight: 600;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
        }
        .item{
            grid-area: item;
            padding: 15px 20px;
            font-weight: 500;
        }
        .item-price{
            grid-area: item-price;
            font-weight: 600;
            padding: 15px 0;
            font-size: 20px;
        }
        .tax-delivery{
            grid-area: tax-delivery;
            padding: 0 20px;
            font-weight: 500;
        }
        .tax-delivery-price{
            grid-area: tax-delivery-price;
            font-weight: 600;
            font-size: 20px;
        }
    }
    .container-bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px 30px;

        p{
            font-size: 25px;
            font-weight: 600;
        }

        strong{
            font-size: 30px;
        }
    }
`;