import React, {useState, useEffect} from 'react'
import { PageHeader, AppLogo, PageContent, PageFooter, StyledLink, ContactButton } from "./styles";
import { Layout, Row, Col, Space, Typography } from "antd";
import { SendOutlined } from '@ant-design/icons'
import { Helmet } from "react-helmet";
import FooterArrow from "../../../public/assets/footer.svg"

const {Title, Paragraph} = Typography


export default function PageLayout(props) {
    // state to keep track of how many px scrolled
    const [scroll, setScroll] = useState(typeof window !== "undefined" ? window.scrollY : 0);
    const handleScroll = (e) => {
      console.log(e)
      setScroll(typeof window !== "undefined" ? window.scrollY : 0)
    };

    // set up listener on window to update scroll state on scroll
    useEffect(() => {
      
      if(typeof window !== "undefined"){
        console.log("Add Scroll Event Listener")
        window.addEventListener("scroll", handleScroll);
      }  
      return () => {
        if(typeof window !== "undefined"){

          window.removeEventListener("scroll", () => {
            console.log("Remove Scroll Event Listener")
          });
        } 
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
                <FooterArrow style={{position: "absolute"}} />
            </PageContent>
            
            <PageFooter>
              <Title level={3} style={{color: "#fff", fontWeight: "bold", marginBottom: "20px"}}>Like What We Have To Offer?</Title>
              <ContactButton  ghost icon={<SendOutlined />} size="large">Contact Us</ContactButton>

              <Paragraph style={{color: "#fff", marginTop: "20px"}} >&copy; {new Date().getFullYear()} All Rights Reserved.</Paragraph>
            </PageFooter>
        </Layout>
    )
}
