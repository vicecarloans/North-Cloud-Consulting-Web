import styled from 'styled-components'
import { Layout } from 'antd'
import { Link } from "gatsby";

const {Header, Content, Footer} = Layout

export const PageHeader = styled(Header)`
    background-color: transparent;
    position: absolute;
    width: 100%; 
    top: 0;
    z-index: 3;
`;

export const AppLogo = styled.div`
    height: 64px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`;

export const PageContent = styled(Content)``

export const PageFooter = styled(Footer)`
    background-color: transparent;
`;

export const StyledLink = styled(Link)`
    color: #fff;
    &:hover, &:active {
        color: #1bc8ee;
    }
`;
