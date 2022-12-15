import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 76%;
    padding: 15px;
    margin: 10px;

    border: 1px solid #FAFAFA70;
    border-radius: 18px;
    box-shadow: 0 3px 6px rgba(140,149,159,0.1);

    background-color: #00000030;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.remover {
        color: #FF0000;
        margin-top:20px;
    }
`