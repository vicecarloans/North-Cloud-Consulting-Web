import styled from 'styled-components'
import { Layout, Button } from 'antd'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const {Header, Content, Footer} = Layout

export const PageHeader = styled(Header)`
    background-color: ${props => props.scroll > 100 ? "rgba(255,255,255,0.8)" : "transparent"};
    position: fixed;
    width: 100%; 
    top: 0;
    z-index: 10;
`;

export const AppLogo = styled.div`
    width: ${props => props.scroll > 100 ? "100px" : "120px"};
    height: ${props => props.scroll > 100 ? "64px" : "100px"};
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
    background: linear-gradient(to bottom, #ECE9E6, #FFFFFF);
    text-align: center;
    min-height: 150px;
    padding-top: 100px;
`;

export const StyledLink = styled(AniLink)`
    color: #000;
    &:hover, &:active {
        color: #15778c;
    }
`;

export const DrawerLink = styled(AniLink)`
    color: #000;
    margin: 20px 0;
    &:hover, &:active {
        color: #15778c;
    }
    display: block;
`;

export const ContactButton = styled(Button)`
    &:hover, &:active, &:focus {
        color: #18578c;
        border-color: #18578c;
    }
`;