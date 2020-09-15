import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import {
    FounderTitle,
    TeamList,
    Conte,
    DBox,
    DLeft,
    DRight,
    Con,
} from "./About.styles";
import { Spring } from "react-spring/renderprops";
import { Typography, Row, Col, Avatar } from "antd";

const { Title, Text, Paragraph } = Typography;

export default function Member({ data }) {
    return (
        <>
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
                                    style={{ ...styles, fontWeight: "bold" }}
                                    level={4}
                                >
                                    {data.memberSectionTitle}
                                </Title>
                            )}
                        </Spring>
                    </FounderTitle>
                )}
            </VisibilitySensor>
            <Row
                align="top"
                gutter={[16, 16]}
                justify="center"
                style={{ paddingLeft: 20, paddingRight: 20 }}
            >
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
                                        style={{ ...styles }}
                                        key={consultant.name}
                                        xs={24}
                                        sm={24}
                                        lg={8}
                                        xl={8}
                                    >
                                        <TeamList>
                                            <Conte>
                                                <DBox>
                                                    <DLeft>
                                                        <Avatar
                                                            size={80}
                                                            src={`https:${consultant.image.fluid.src}`}
                                                        />
                                                    </DLeft>
                                                    <DRight>
                                                        <Title level={4}>
                                                            {consultant.name}
                                                        </Title>
                                                        <Text
                                                            style={{
                                                                color:
                                                                    "rgba(0,0,0,0.61)",
                                                                display:
                                                                    "block",
                                                                margin:
                                                                    "0 0 20",
                                                            }}
                                                        >
                                                            {consultant.title}
                                                        </Text>
                                                    </DRight>
                                                </DBox>
                                                <Con>
                                                    <Paragraph ellipsis={{ rows: 4, expandable: true, symbol: 'more' }}>
                                                        {
                                                            consultant
                                                                .childContentfulPersonShortBioTextNode
                                                                .shortBio
                                                        }
                                                    </Paragraph>
                                                </Con>
                                            </Conte>
                                        </TeamList>
                                    </Col>
                                )}
                            </Spring>
                        )}
                    </VisibilitySensor>
                ))}
            </Row>
        </>
    );
}
