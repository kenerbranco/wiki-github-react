import styled from "styled-components";

export const ButtonContainer = styled.button`

    background-color: #FAFAFA;
    border: 2px solid #FAFAFA;
    border-radius: 16px;
    box-shadow: 0 3px 6px rgba(140,149,159,0.1);

    height: 35px;
    width: 70px;

    margin-top: 20px;
    margin-bottom: 25px;

    font-size: 0.9rem;

    &: hover {
        background-color: #FAFAFA90;
        cursor: pointer;
        color: #FFFFFF;
        border: 2px solid #FAFAFA;
    }

`