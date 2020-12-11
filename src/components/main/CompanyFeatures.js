import React from "react";
import { Typography, List, Card } from "antd";
import { CompanyFeaturesDiv } from "./Main.styles";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import Img from "gatsby-image";
import { isMobileOnly, isTablet } from "react-device-detect";

const { Title, Paragraph } = Typography;

export default function CompanyFeatures({ data }) {
    let containerMarginTop = 400;
    if (isMobileOnly) {
        containerMarginTop = 300;
    }
    if (isTablet) {
        containerMarginTop = 100;
    }
    return (
        <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
                <div
                    style={{
                        minHeight: 100,
                        marginTop:
                            data.feedbacks.length > 0 ? containerMarginTop : 0,
                    }}
                >
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
