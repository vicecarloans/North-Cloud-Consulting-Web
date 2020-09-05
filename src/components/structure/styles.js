import styled from 'styled-components'
import { Layout } from 'antd'
import { Link } from "gatsby";

const {Header, Content, Footer} = Layout

export const PageHeader = styled(Header)`
    background-color: ${props => props.scroll > 30 ? "rgba(255,255,255,0.8)" : "transparent"};
    position: fixed;
    width: 100%; 
    top: 0;
    z-index: 10;
    
`;

export const AppLogo = styled.div`
    height: 64px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`;

export const PageContent = styled(Content)`
    padding-bottom: 100px;
`

export const PageFooter = styled(Footer)`
    background-color: #1890ff;
`;

export const StyledLink = styled(Link)`

    color: ${props => props.scroll > 30 ? "#000" : "#fff"};
    &:hover, &:active {
        color: #1bc8ee;
    }
`;
