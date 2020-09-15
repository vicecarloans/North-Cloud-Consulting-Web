import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Row, Col } from "antd";
import { PageLayout } from "components/structure";
import { TopSection, HeroImage } from "components/post";
import { richTextConfig } from "utils/richTextConfig";
import { get } from "lodash";

export default function BlogPost(props) {
    const post = get(props.data, "contentfulBlogPost");
    const siteTitle = get(props.data, "site.siteMetadata.title");

    return (
        <PageLayout introComponent={<TopSection data={post} />}>
            <HeroImage post={post} />
            <Row style={{ width: "100%", marginLeft: 10, paddingRight: 10, marginBottom: 100 }} justify="center">
                <Col xs={24} sm={24} lg={12} xl={12}>
                    {documentToReactComponents(post.body.json, richTextConfig)}
                </Col>
            </Row>
        </PageLayout>
    );
}

export const PageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishDate(formatString: "MMMM Do, YYYY")
            heroImage {
                fluid(
                    maxWidth: 880
                    maxHeight: 450
                    resizingBehavior: SCALE
                    quality: 100
                ) {
                    ...GatsbyContentfulFluid
                }
            }
            author {
                name
            }
            tags
            body {
                json
            }
        }
    }
`;
