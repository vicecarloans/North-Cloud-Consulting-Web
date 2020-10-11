import styled from "styled-components"

export const FounderTitle = styled.div`
    min-height: 50px;
    margin-top: 40px;
    text-align: left;
`;

export const FounderSubTitle = styled.div`
    min-height: 50px;
    text-align: left;
`;

export const TeamList = styled.div`
    display: block;
    position: relative;
    min-height: 350px;
    margin-top: 18px;
    border-radius: 15px;
    margin-bottom: 50px;
    max-width: 619px;

    &::after {
        background: linear-gradient(to right, #2854f2, #6885f5);
        border-radius: 15px;
        content: "";
        position: absolute;
        left: 50px;
        right: 50px;
        top: -18px;
        bottom: 0;
        height: 100px;
    }
`;

export const Conte = styled.div`
    position: relative;
    z-index: 9999;
    padding: 0 45px;
    padding-top: 45px;
    padding-bottom: 20px;
    background: #b0d9ff;
    z-index: 999;
    border-radius: 15px;
`;  

export const DBox = styled.div`
    margin: 0 0 25px;
    overflow: hidden;
    z-index: 1;
    vertical-align: middle;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const DLeft = styled.div`
    display: inline-block;
    padding-right: 10px;
`;

export const DRight = styled.div`
    display: table;
    padding-left: 10px;
`;

export const Con = styled.div`

`;
