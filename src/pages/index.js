import React from "react";
import { graphql } from "gatsby";
import { PageLayout } from "components/structure";

import { Intro, IntroContent, CompanyFeatures } from "components/main";
import { get } from "lodash";
import { BlogPost } from "components/blog";
function RootIndex(props) {
    const [main] = get(props.data, "allContentfulMainPage.edges");
    const blogs = get(props.data, "allContentfulBlogPost.edges");
    const transformedBlogs = { blogSectionTitle: main.node.blogSectionTitle };
    transformedBlogs.blogs = blogs.map(({ node }) => ({ ...node }));
    return (
        <Intro data={main.node}>
            <PageLayout
                introComponent={<IntroContent data={main.node} />}
                location={props.location}
            >
                <CompanyFeatures data={main.node} />
                <BlogPost data={transformedBlogs} showPagination={false} />
            </PageLayout>
        </Intro>
    );
}

export default RootIndex;

export const PageQuery = graphql`
    query MainPageQuery {
        allContentfulMainPage {
            edges {
                node {
                    title
                    subTitle
                    mobileSubtitle {
                        childMarkdownRemark {
                            html
                        }
                    }
                    backgroundImage {
                        fluid(
                            maxWidth: 1920
                            maxHeight: 1080
                            resizingBehavior: SCALE
                        ) {
                            ...GatsbyContentfulFluid
                        }
                    }
                    features {
                        title
                        description
                        image {
                            fixed(width: 64, height: 64) {
                                ...GatsbyContentfulFixed
                            }
                        }
                    }
                    featureTitle
                    blogSectionTitle
                    feedbacks {
                        author
                        description {
                            childMarkdownRemark{
                            html
                            }
                        }
                        role
                        icon {
                            fixed(width: 50,height: 50) {
                                src
                            }
                        }
                        id
                    }
                    columnCount
                }
            }
        }
        allContentfulBlogPost(
            limit: 4
            sort: { fields: [createdAt], order: DESC }
        ) {
            edges {
                node {
                    title
                    slug
                    heroImage {
                        fluid(
                            maxWidth: 300
                            maxHeight: 200
                            resizingBehavior: SCALE
                            quality: 100
                        ) {
                            ...GatsbyContentfulFluid
                        }
                    }
                    childContentfulBlogPostDescriptionTextNode {
                        description
                    }
                }
            }
        }
    }
`;
