import React from "react";
import { Typography, List, Card } from "antd";
import { CompanyFeaturesDiv } from "./Main.styles";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import Img from "gatsby-image";

const { Title, Paragraph } = Typography;

export default function CompanyFeatures({ data }) {
    return (
        <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
                <div style={{ minHeight: 100 }}>
                    <CompanyFeaturesDiv>
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
                                    level={5}
                                >
                                    {data.featureTitle}
                                </Title>
                            )}
                        </Spring>
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 1,
                                md: 2,
                                lg: 2,
                                xl: 3,
                                xxl: 3,
                            }}
                            dataSource={data.features}
                            renderItem={(item) => (
                                <Spring
                                    to={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible
                                            ? "translateY(0)"
                                            : "translateY(100px)",
                                    }}
                                >
                                    {(styles) => (
                                        <List.Item
                                            style={{ ...styles, marginTop: 15 }}
                                        >
                                            <Card
                                                bordered={false}
                                                style={{
                                                    width: 300,
                                                    margin: "0 auto",
                                                }}
                                            >
                                                <Img
                                                    fixed={item.image.fixed}
                                                    objectFit="cover"
                                                    objectPosition="50% 50%"
                                                    alt={item.title}
                                                />
                                                <Paragraph
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {item.title}
                                                </Paragraph>
                                                <Paragraph>
                                                    {item.description}
                                                </Paragraph>
                                            </Card>
                                        </List.Item>
                                    )}
                                </Spring>
                            )}
                        />
                    </CompanyFeaturesDiv>
                </div>
            )}
        </VisibilitySensor>
    );
}