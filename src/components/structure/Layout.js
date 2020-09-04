import React from 'react'
import { PageHeader, AppLogo, PageContent, PageFooter, StyledLink, IntroContent } from "./styles";
import { Layout, Row, Col, Space } from "antd";
import { Helmet } from "react-helmet";


export default function PageLayout(props) {
    return (
        <Layout style={{backgroundColor: "transparent"}} className="layout">
            <Helmet title="North Cloud Consulting" />
            <PageHeader>
                <Row justify="space-between">
                    <Col>
                      <AppLogo />
                    </Col>
                    <Col>
                      <Space style={{height: "100%"}} align="center" size="large">
                        <StyledLink to="/solutions">Solutions</StyledLink>
                        <StyledLink to="/blog">Blog</StyledLink>
                        <StyledLink to="/about">About Us</StyledLink>
                      </Space>
                    </Col>
                </Row>
            </PageHeader>

            {props.introComponent}

            <PageContent>
                {props.children}
            </PageContent>
            <PageFooter></PageFooter>
        </Layout>
    )
}
