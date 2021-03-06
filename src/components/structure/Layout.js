import React, { useState, useEffect } from "react";
import {
    PageHeader,
    AppLogo,
    PageContent,
    PageFooter,
    StyledLink,
    ContactButton,
    DrawerLink,
    FooterNav,
} from "./styles";
import {
    Layout,
    Row,
    Col,
    Space,
    Typography,
    Modal,
    Button,
    Form,
    Input,
    message,
    Drawer,
} from "antd";
import { SendOutlined, MenuOutlined } from "@ant-design/icons";
import { ModalContext } from "utils/modal-context";
import useDeviceDetect from "utils/useDeviceDetect";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useLocation } from "@reach/router";
import { StaticQuery, graphql } from "gatsby";
import SEO from './SEO'

const { Title, Paragraph } = Typography;

function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + `=` + encodeURIComponent(data[key])
        )
        .join(`&`);
}

export default function PageLayout(props) {
    // state to keep track of how many px scrolled
    const [scroll, setScroll] = useState(
        typeof window !== "undefined" ? window.scrollY : 0
    );
    // Modal
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    // Drawer
    const [openDrawer, setDrawerState] = useState(false);
    //Use Form
    const [form] = Form.useForm();
    // Mobile Check
    const { isMobile } = useDeviceDetect();
    const handleScroll = () =>
        setScroll(typeof window !== "undefined" ? window.scrollY : 0);
    // Current Route
    const location = useLocation();
    // set up listener on window to update scroll state on scroll
    useEffect(() => {
        if (typeof window !== "undefined") {
            console.log("Add Scroll Event Listener");
            window.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", () => {
                    console.log("Remove Scroll Event Listener");
                });
            }
        };
    }, []);

    function toggleModal() {
        setVisible(!visible);
    }

    async function handleOk() {
        try {
            setLoading(true);
            await form.validateFields();

            form.submit();
        } catch (err) {
            setLoading(false);
        }
    }
    function handleCancel() {
        toggleModal();
    }

    function handleSubmit(values) {
        if (values[`bot-field`] === undefined) {
            delete values[`bot-field`];
        }
        fetch(`/`, {
            method: `POST`,
            headers: { "Content-Type": `application/x-www-form-urlencoded` },
            body: encode({
                "form-name": "contact-form",
                ...values,
            }),
        })
            .then(() => {
                setLoading(false);
                toggleModal();
                message.success({
                    content:
                        "We have received your request and will be reaching out shortly",
                });
                form.resetFields();
            })
            .catch((error) => {
                message.error({
                    content:
                        "Ooops...Something went wrong. Please retry or contact Administrator",
                });
            });
    }

    return (
        <ModalContext.Provider value={{ toggleModal, visible, loading }}>
            <Layout
                style={{ backgroundColor: "transparent" }}
                className="layout"
            >
                <SEO title={props.siteTitle} description={props.siteDescription} />
                {/*
                    This defines how your form is setup for the Netlify bots.
                    Users will not see or interact with this form.
                */}
                <form
                    name="contact-form"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    hidden
                >
                    <input type="text" name="fullName" />
                    <input type="email" name="email" />
                    <input type="text" name="phone" />
                    <textarea name="message"></textarea>
                </form>
                <Modal
                    visible={visible}
                    title="Contact Us"
                    centered
                    confirmLoading={loading}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Close
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            loading={loading}
                            onClick={handleOk}
                        >
                            Get In Touch
                        </Button>,
                    ]}
                    maskClosable={false}
                    destroyOnClose
                >
                    <Form
                        onFinish={handleSubmit}
                        layout="vertical"
                        requiredMark="optional"
                        form={form}
                        name="contact-form"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        {/* This is the hidden field that the netlify-honeypot uses. */}
                        <Form.Item
                            label="Don't fill this out"
                            className={`hidden`}
                            style={{ display: `none` }}
                            name="bot-field"
                        >
                            <Input type={`hidden`} />
                        </Form.Item>
                        <Form.Item
                            name="fullName"
                            label="Full Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your name!",
                                },
                            ]}
                        >
                            <Input placeholder="John Doe" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                                {
                                    type: "email",
                                    message: "Input must be a valid email!",
                                },
                            ]}
                        >
                            <Input placeholder="name@company.com" />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your phone!",
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        const regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/; // eslint-disable
                                        if (regex.test(value)) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            "Phone number is invalid!"
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input placeholder="(555) 555-5555" />
                        </Form.Item>
                        <Form.Item name="message" label="Message">
                            <Input.TextArea
                                autoSize={{ minRows: 3 }}
                                placeholder="Your message here"
                            />
                        </Form.Item>
                    </Form>
                </Modal>
                <PageHeader scroll={scroll}>
                    <Row justify="space-between">
                        <Col>
                            <AniLink to="/" fade>
                                <AppLogo scroll={scroll} />
                            </AniLink>
                        </Col>
                        <Col>
                            <Space
                                style={{ height: "100%" }}
                                align="center"
                                size="large"
                            >
                                {isMobile
                                    ? [
                                          <Button
                                              type="text"
                                              icon={<MenuOutlined />}
                                              onClick={() =>
                                                  setDrawerState(true)
                                              }
                                              key="drawer-btn"
                                          ></Button>,
                                          <Drawer
                                              title="Navigation"
                                              placement="left"
                                              onClose={() =>
                                                  setDrawerState(false)
                                              }
                                              visible={openDrawer}
                                              key="navigation-drawer"
                                          >
                                              <DrawerLink
                                                  scroll={scroll}
                                                  to="/solutions"
                                                  fade
                                              >
                                                  Our Services
                                              </DrawerLink>
                                              <DrawerLink
                                                  scroll={scroll}
                                                  to="/blog"
                                                  fade
                                              >
                                                  Blog
                                              </DrawerLink>
                                              <DrawerLink
                                                  scroll={scroll}
                                                  to="/about"
                                                  fade
                                              >
                                                  About Us
                                              </DrawerLink>
                                          </Drawer>,
                                      ]
                                    : [
                                          <StyledLink
                                              scroll={scroll}
                                              pathname={location.pathname}
                                              to="/solutions"
                                              key="solution-link"
                                              fade
                                          >
                                              Our Services
                                          </StyledLink>,
                                          <StyledLink
                                              key="blog-link"
                                              scroll={scroll}
                                              pathname={location.pathname}
                                              to="/blog"
                                              fade
                                          >
                                              Blog
                                          </StyledLink>,
                                          <StyledLink
                                              key="about-us-link"
                                              scroll={scroll}
                                              pathname={location.pathname}
                                              to="/about"
                                              fade
                                          >
                                              About Us
                                          </StyledLink>,
                                      ]}
                            </Space>
                        </Col>
                    </Row>
                </PageHeader>

                {props.introComponent}

                <PageContent>
                    {props.children}
                    {/* <FooterArrow style={{ position: "absolute" }} /> */}
                </PageContent>
                <StaticQuery
                    query={graphql`
                        query FooterQuery {
                            allContentfulFooter(limit: 1) {
                                edges {
                                    node {
                                        image {
                                            file {
                                                url
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    `}
                    render={(data) => {
                        const imageSrc = `https:${data.allContentfulFooter.edges[0].node.image.file.url}`;
                        return (
                            <PageFooter src={imageSrc}>
                                <Row
                                    gutter={[16, 16]}
                                    justify="center"
                                >
                                    <Col xs={24} sm={24} lg={8} xl={8}>
                                        <div>
                                            <Title level={3} style={{fontSize: 30, fontWeight: "bold"}}>
                                                Navigation
                                            </Title>
                                        </div>
                                        <FooterNav>
                                            <StyledLink
                                                scroll={scroll}
                                                pathname={location.pathname}
                                                to="/solutions"
                                                key="solution-link"
                                                fade
                                            >
                                                Our Services
                                            </StyledLink>
                                        </FooterNav>
                                        <FooterNav>
                                            <StyledLink
                                                key="blog-link"
                                                scroll={scroll}
                                                pathname={location.pathname}
                                                to="/blog"
                                                fade
                                            >
                                                Blog
                                            </StyledLink>
                                        </FooterNav>
                                        <FooterNav>
                                            <StyledLink
                                                key="about-us-link"
                                                scroll={scroll}
                                                pathname={location.pathname}
                                                to="/about"
                                                fade
                                            >
                                                About Us
                                            </StyledLink>
                                        </FooterNav>
                                    </Col>
                                    <Col xs={24} sm={24} lg={8} xl={8}>
                                        <Title
                                            level={3}
                                            style={{
                                                fontWeight: "bold",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            Like What We Have To Offer?
                                        </Title>
                                        <ContactButton
                                            type="primary"
                                            onClick={toggleModal}
                                            icon={<SendOutlined />}
                                            size="large"
                                        >
                                            Talk To Us!
                                        </ContactButton>

                                        <Paragraph
                                            style={{ marginTop: "20px" }}
                                        >
                                            &copy; {new Date().getFullYear()}{" "}
                                            All Rights Reserved.
                                        </Paragraph>
                                    </Col>
                                </Row>
                            </PageFooter>
                        );
                    }}
                />
            </Layout>
        </ModalContext.Provider>
    );
}
