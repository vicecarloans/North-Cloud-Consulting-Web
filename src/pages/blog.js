import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { PageLayout } from "components/structure";
import { TopSection, BlogPost } from "components/blog";

export default function BlogPage(props) {
    const [page] = get(props.data, "allContentfulBlogPage.edges");
    return (
        <PageLayout
            introComponent={<TopSection data={page.node} />}
        >
            <BlogPost data={page.node} showPagination />
        </PageLayout>
    );
}

export const PageQuery = graphql`
    query BlogPageQuery {
        allContentfulBlogPage {
            edges {
                node {
                    title
                    subTitle
                    description {
                        childMarkdownRemark{
                            html
                        }
                    }
                    blogSectionTitle
                    topSectionImage {
                        fixed(width: 200, height: 200) {
                            ...GatsbyContentfulFixed_tracedSVG
                        }
                    }
                    blogs {
                        title
                        slug
                        heroImage {
                            fluid(
                                maxWidth: 300
                                maxHeight: 200
                                resizingBehavior: SCALE
                                quality: 100
                            ) {
                                ...GatsbyContentfulFluid_tracedSVG
                            }
                        }
                        childContentfulBlogPostDescriptionTextNode {
                            description
                        }
                    }
                }
            }
        }
    }
`;
