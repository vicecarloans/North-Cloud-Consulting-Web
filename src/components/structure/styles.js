import styled from 'styled-components'
import { Layout, Button } from 'antd'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const {Header, Content, Footer} = Layout


export const PageHeader = styled(Header)`
    background-color: ${props => props.scroll >= 0 ? "rgba(255,255,255,0.8)" : "transparent"};
    position: fixed;
    width: 100%; 
    top: 0;
    z-index: 10;
`;

export const AppLogo = styled.div`
    width: ${props => props.scroll >= 0 ? "100px" : "120px"};
    height: ${props => props.scroll >= 0 ? "64px" : "100px"};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url("/assets/app-logo.png");
    transition-duration: 300ms;
    cursor: pointer;
`;

export const PageContent = styled(Content)`
    padding-bottom: 1px;
`
export const PageFooter = styled(Footer)`
    /* background: linear-gradient(to top, #73cff5, #FFFFFF); */
    background-image: url(${props => props.src ? props.src : ""});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;

    text-align: center;
    min-height: 150px;
    padding-top: 100px;
`;
export const StyledLink = styled(AniLink)`
    color: ${props => props.scroll >= 0 || props.pathname !== "/"  ? "#000" :"#fff"};
    &:hover, &:active {
        color: #73cff5;
    }
`;

export const DrawerLink = styled(AniLink)`
    color: #000;
    margin: 20px 0;
    &:hover, &:active {
        color: #73cff5;
    }
    display: block;
`;

export const ContactButton = styled(Button)`
   
`;

export const FooterNav = styled.div`
    margin-bottom: 5px;
`;