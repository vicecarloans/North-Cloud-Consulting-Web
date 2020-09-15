import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { BlogTitle, VisibilityWrapper } from "./Blog.styles";
import { navigate } from "gatsby"
import { Spring } from "react-spring/renderprops";
import { Typography, List, Card } from "antd";
import Img from "gatsby-image";

const { Title } = Typography;

export default function BlogPost({ data }) {
    return (
        <>
            <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                    <BlogTitle>
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
                                    {data.blogSectionTitle}
                                </Title>
                            )}
                        </Spring>
                    </BlogTitle>
                )}
            </VisibilitySensor>
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
                style={{marginBottom: 100}}
                dataSource={data.blogs}
                renderItem={(item, i) => (
                    <VisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                            <VisibilityWrapper>
                                <Spring
                                    to={{
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible
                                            ? "translateY(0)"
                                            : "translateY(100px)",
                                    }}
                                    delay={i * 100}
                                >
                                    {(styles) => (
                                        <List.Item
                                            style={{ ...styles, marginTop: 15 }}
                                            onClick={() => {navigate(`/blog/${item.slug}`)}}
                                        >
                                            <Card
                                                style={{
                                                    width: 300,
                                                    margin: "0 auto",
                                                }}
                                                cover={
                                                    <Img fluid={item.heroImage.fluid} alt={item.title} />
                                                }
                                                hoverable
                                            >
                                                <Card.Meta className="custom-card-meta" title={item.title} description={item.childContentfulBlogPostDescriptionTextNode.description} />
                                            </Card>
                                        </List.Item>
                                    )}
                                </Spring>
                            </VisibilityWrapper>
                        )}
                    </VisibilitySensor>
                )}
            />
        </>
    );
}
