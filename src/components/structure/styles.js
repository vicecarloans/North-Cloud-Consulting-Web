import styled from 'styled-components'
import { Layout } from 'antd'

const {Header, Content, Footer} = Layout

export const PageHeader = styled(Header)`
    background-color: transparent;
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