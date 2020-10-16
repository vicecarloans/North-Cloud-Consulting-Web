import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import {
    FounderTitle,
    FounderSubTitle,
} from "./About.styles";
import { Spring } from "react-spring/renderprops";
import useDeviceDetect from "utils/useDeviceDetect";
import { Typography, Row, Col, Avatar, Button } from "antd";
import { LinkedinFilled, TwitterOutlined } from '@ant-design/icons'

const { Title, Text } = Typography;

function navigateTo(url) {
    window.open(url, "_blank");
}

export default function Member({ data }) {
    const { isMobile } = useDeviceDetect();

    return (
        <Row
            align="top"
            gutter={[24, 24]}
            justify="center"
            style={{ paddingLeft: 20, paddingRight: 20, marginTop: 80 }}
        >
            <Col align="end" xs={24} sm={24} lg={6} xl={6}>
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <FounderTitle>
                            <Spring
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? "translateY(0)"
                                        : "translateY(100px)",
                                }}
                            >
                                {(styles) => (
                                    <Title
                                        style={{
                                            ...styles,
                                            fontWeight: "bold",
                                        }}
                                        level={4}
                                    >
                                        {data.memberSectionTitle}
                                    </Title>
                                )}
                            </Spring>
                        </FounderTitle>
                    )}
                </VisibilitySensor>
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <FounderSubTitle>
                            <Spring
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? "translateY(0)"
                                        : "translateY(100px)",
                                }}
                            >
                                {(styles) => (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                data.memberSectionDescription
                                                    .childMarkdownRemark.html,
                                        }}
                                        style={{
                                            ...styles,
                                            fontWeight: "bold",
                                        }}
                                    />
                                )}
                            </Spring>
                        </FounderSubTitle>
                    )}
                </VisibilitySensor>
            </Col>
            {data.consultants.map((consultant) => (
                <VisibilitySensor partialVisibility key={consultant.name}>
                    {({ isVisible }) => (
                        <Spring
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? "translateY(0)"
                                    : "translateY(100px)",
                            }}
                        >
                            {(styles) => (
                                <Col
                                    style={{ ...styles, marginLeft: isMobile ? 0 : 100 }}
                                    key={consultant.name}
                                    align="middle"
                                    xs={24}
                                    sm={24}
                                    lg={6}
                                    xl={4}
                                >
                                    <Avatar
                                        shape="square"
                                        size={200}
                                        src={`https:${consultant.image.fluid.src}`}
                                    />
                                    <Title style={{marginTop: 10, marginBottom: 10}} level={4}>{consultant.name}</Title>
                                    <Text
                                        style={{
                                            color: "rgba(0,0,0,0.61)",
                                            display: "block",
                                            marginBottom: 10
                                        }}
                                    >
                                        {consultant.title}
                                    </Text>
                                    <Button onClick={() => {navigateTo(consultant.twitter)}} type="primary" style={{backgroundColor: "#55acee", borderColor: "#55acee", margin: 5}} shape="circle" icon={<TwitterOutlined />} size="32" />

                                    <Button onClick={() => {navigateTo(consultant.linkedIn)}} type="primary" style={{backgroundColor: "#0077b5", borderColor: "#0077b5", margin: 5}} shape="circle" icon={<LinkedinFilled />} size="32" />
                                </Col>
                            )}
                        </Spring>
                    )}
                </VisibilitySensor>
            ))}
        </Row>
    );
}
