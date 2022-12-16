import styled from "styled-components";

export const ItemContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 76%;
    padding: 15px;
    margin: 10px;

    border: 2px solid #FAFAFA70;
    border-radius: 18px;
    box-shadow: 0 3px 6px rgba(140,149,159,0.1);

    background-color: #00000030;

    h3 {
        font-size: 32px;
        margin: 5px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-left: 5px;
        margin-bottom: 10px;
    }

    p.language {
        font-size: 14px;
    }

    a {
        font-size: 0.9rem;
        text-decoration: none;
        color: #FFFFFF;

        margin: 5px;
        padding: 6px;
        box-shadow: 0 3px 6px rgba(140,149,159,0.1);

        border: 2px solid #FAFAFA70;
        border-radius: 16px;
    }

    a.verRepo:hover {
        border: 2px solid #00855A;
        opacity: 0.8;
    }

    a.remover:hover {
        border: 2px solid #9B111E;
        opacity: 0.8;
    }
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 7px;
`