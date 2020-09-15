import React, { useState, useEffect } from "react";
import {
    PageHeader,
    AppLogo,
    PageContent,
    PageFooter,
    StyledLink,
    ContactButton,
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
} from "antd";
import { SendOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";
import FooterArrow from "../../../public/assets/footer.svg";
import { ModalContext } from "utils/modal-context";

const { Title, Paragraph } = Typography;

export default function PageLayout(props) {
    // state to keep track of how many px scrolled
    const [scroll, setScroll] = useState(
        typeof document !== "undefined" ? document.body.scrollTop : 0
    );
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const handleScroll = () =>
        setScroll(
            typeof document !== "undefined" ? document.body.scrollTop : 0
        );

    // set up listener on window to update scroll state on scroll
    useEffect(() => {
        if (typeof document !== "undefined") {
            console.log("Add Scroll Event Listener");
            document.body.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (typeof document !== "undefined") {
                document.body.removeEventListener("scroll", () => {
                    console.log("Remove Scroll Event Listener");
                });
            }
        };
    }, []);

    function toggleModal() {
        setVisible(!visible);
    }

    async function handleOk() {
        try{
            setLoading(true)
            await form.validateFields();
            form.submit();
            setLoading(false);
        }catch(err){
            setLoading(false);
        }
        
    }
    function handleCancel() {
        toggleModal();
    }

    return (
        <ModalContext.Provider value={{ toggleModal, visible, loading }}>
            <Layout
                style={{ backgroundColor: "transparent" }}
                className="layout"
            >
                <Helmet title={props.title} />
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
                    <Form layout="vertical" requiredMark="optional" form={form}  name="Contact Form" method="POST" data-netlify="true">
                        <input
                            type="hidden"
                            name="form-name"
                            value="Contact Form"
                        />
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
                            ]}
                        >
                            <Input placeholder="(555) 555-5555" />
                        </Form.Item>
                        <Form.Item name="message" label="Message">
                            <Input.TextArea autoSize={{minRows: 3}} placeholder="Your message here" />
                        </Form.Item>
                    </Form>
                </Modal>
                <PageHeader scroll={scroll}>
                    <Row justify="space-between">
                        <Col>
                            <AppLogo />
                        </Col>
                        <Col>
                            <Space
                                style={{ height: "100%" }}
                                align="center"
                                size="large"
                            >
                                <StyledLink scroll={scroll} to="/solutions">
                                    Solutions
                                </StyledLink>
                                <StyledLink scroll={scroll} to="/blog">
                                    Blog
                                </StyledLink>
                                <StyledLink scroll={scroll} to="/about">
                                    About Us
                                </StyledLink>
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
                            color: "#fff",
                            fontWeight: "bold",
                            marginBottom: "20px",
                        }}
                    >
                        Like What We Have To Offer?
                    </Title>
                    <ContactButton
                        onClick={toggleModal}
                        ghost
                        icon={<SendOutlined />}
                        size="large"
                    >
                        Contact Us
                    </ContactButton>

                    <Paragraph style={{ color: "#fff", marginTop: "20px" }}>
                        &copy; {new Date().getFullYear()} All Rights Reserved.
                    </Paragraph>
                </PageFooter>
            </Layout>
        </ModalContext.Provider>
    );
}
