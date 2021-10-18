import styled from "styled-components";

export const Container = styled.div`
    grid-area: auto;
`; 


export const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 6px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export const UserInfo = styled.div`
    border-bottom: 2px solid rgba(0, 0, 0, 0.15);
    padding: 4rem;
    word-wrap: break-word;
    word-break: break-word;

`;

export const Photo = styled.div`
    box-shadow: none;
    background-image: url("/images/fotocv.jpg");
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 3px solid #DB9797;
    margin: -38px auto 12px;
    border-radius: 50%;
`;

export const NameCard = styled.div`
    font-family: Arial;
    font-size: 24px;
    font-styled: bold;
    color: #565656;
    line-height: 1.5;
`;

export const LinkCard = styled.div`
    font-size: 14px;
    line-height: 1.5;
`;

export const TitleCardPro = styled.div`
    font-size: 12px;
    color: #808080;
`;

export const Widget = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    color: #808080;
    margin-left: 10px;

& > a {
    text-decoration: none;
    font-size: 14px;
    display: flex;
    justify-content: center;
    padding: 4px 12px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    div {
        display: flex;
        align-items: center;
    }
}

& span {
    margin-left: 10px;
}
`;
