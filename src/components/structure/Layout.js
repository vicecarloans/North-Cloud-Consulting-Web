import React from 'react'
import { PageHeader, AppLogo, PageContent, PageFooter } from "./styles";
import { Layout, Row, Col, Space } from "antd";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

export default function PageLayout(props) {
    console.log(props.location)
    return (
        <Layout style={{backgroundColor: "transparent"}} className="layout">
            <Helmet title="North Cloud Consulting" />
            <PageHeader>
                <Row justify="space-between">
                    <Col>
                      <AppLogo />
                    </Col>
                    <Col>
                      <Space style={{height: "100%"}} align="center" size="middle">
                        <Link to="/solutions">Solutions</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/about">About Us</Link>
                      </Space>
                    </Col>
                </Row>
            </PageHeader>
            <PageContent>
                {props.children}
            </PageContent>
            <PageFooter></PageFooter>
        </Layout>
    )
}
