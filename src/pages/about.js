import React from "react";
import { graphql } from "gatsby";
import { get } from "lodash";
import { PageLayout } from "components/structure";
import { TopSection, MemberSection } from "components/about";

export default function About(props) {
    const [page] = get(props.data, "allContentfulAboutPage.edges");
    const siteTitle = get(props.data, "site.siteMetadata.title");
    const siteDescription = get(props.data, "site.siteMetadata.description");
    const keywords = get(props.data, "site.siteMetadata.keywords");
    return (
        <PageLayout
            metaDescription={siteDescription}
            keywords={keywords}
            title={siteTitle}
            introComponent={<TopSection data={page.node} />}
        >
            <MemberSection data={page.node} />
        </PageLayout>
    );
}

export const PageQuery = graphql`
    query AboutPageQuery {
        site {
            siteMetadata {
                title
                author
                description
                siteUrl
                keywords
            }
        }
        allContentfulAboutPage {
            edges {
                node {
                    title
                    subTitle
                    description {
                        childMarkdownRemark{
                            html
                        }
                    }
                    topSectionImage {
                        fixed(width: 200, height: 200) {
                            ...GatsbyContentfulFixed_tracedSVG
                        }
                    }
                    memberSectionTitle
                    memberSectionDescription {
                        childMarkdownRemark {
                            html
                        }
                    }
                    consultants {
                        name
                        title
                        shortBio {
                            childMarkdownRemark {
                                html
                            }
                        }
                        email
                        twitter
                        linkedIn
                        phone
                        image {
                            fluid(
                                maxHeight: 250
                                resizingBehavior: SCALE
                                quality: 100
                            ) {
                                src
                            }
                        }
                    }
                }
            }
        }
    }
`;
