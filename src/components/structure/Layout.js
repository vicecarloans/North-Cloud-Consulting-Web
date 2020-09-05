import React, {useState, useEffect} from 'react'
import { PageHeader, AppLogo, PageContent, PageFooter, StyledLink } from "./styles";
import { Layout, Row, Col, Space, Typography } from "antd";
import { Helmet } from "react-helmet";

const {Text} = Typography


export default function PageLayout(props) {
  // state to keep track of how many px scrolled
  const [scroll, setScroll] = useState(typeof window !== "undefined" ? window.scrollY : 0);
  const handleScroll = () => setScroll(typeof window !== "undefined" ? window.scrollY : 0);

  // set up listener on window to update scroll state on scroll
  useEffect(() => {
    typeof window !== "undefined" && window.addEventListener("scroll", handleScroll);
    return () => {
      typeof window !== "undefined" && window.removeEventListener("scroll");
    }
  }, []);

    return (
        <Layout style={{backgroundColor: "transparent"}} className="layout">
            <Helmet title="North Cloud Consulting" />
            <PageHeader scroll={scroll}>
                <Row justify="space-between">
                    <Col>
                      <AppLogo />
                    </Col>
                    <Col>
                      <Space style={{height: "100%"}} align="center" size="large">
                        <StyledLink scroll={scroll} to="/solutions">Solutions</StyledLink>
                        <StyledLink scroll={scroll} to="/blog">Blog</StyledLink>
                        <StyledLink scroll={scroll} to="/about">About Us</StyledLink>
                      </Space>
                    </Col>
                </Row>
            </PageHeader>

            {props.introComponent}

            <PageContent>
                {props.children}
            </PageContent>
            <PageFooter style={{ textAlign: 'center' }}>
              
            </PageFooter>
        </Layout>
    )
}
