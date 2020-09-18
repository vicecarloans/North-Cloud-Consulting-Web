import React, { useState, useEffect } from "react";
import {
    PageHeader,
    AppLogo,
    PageContent,
    PageFooter,
    StyledLink,
    ContactButton,
    DrawerLink,
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
import { Helmet } from "react-helmet";
import FooterArrow from "../../../public/assets/footer.svg";
import { ModalContext } from "utils/modal-context";
import useDeviceDetect from "utils/useDeviceDetect";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
                <Helmet
                    title={props.title}
                    htmlAttributes={{
                        lang: "en",
                    }}
                    meta={[
                        {
                            name: "description",
                            content: props.metaDescription,
                        },
                        {
                            property: "keywords",
                            content: props.keywords.join(","),
                        },
                    ]}
                />
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
                                        const regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
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
                                                  Solutions
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
                                              to="/solutions"
                                              key="solution-link"
                                              fade
                                          >
                                              Solutions
                                          </StyledLink>,
                                          <StyledLink
                                              key="blog-link"
                                              scroll={scroll}
                                              to="/blog"
                                              fade
                                          >
                                              Blog
                                          </StyledLink>,
                                          <StyledLink
                                              key="about-us-link"
                                              scroll={scroll}
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
                    <FooterArrow style={{ position: "absolute" }} />
                </PageContent>

                <PageFooter>
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
                        onClick={toggleModal}
                        icon={<SendOutlined />}
                        size="large"
                    >
                        Contact Us
                    </ContactButton>

                    <Paragraph style={{ marginTop: "20px" }}>
                        &copy; {new Date().getFullYear()} All Rights Reserved.
                    </Paragraph>
                </PageFooter>
            </Layout>
        </ModalContext.Provider>
    );
}
