import React from "react";
import { graphql } from "gatsby";
import { get } from "lodash";
import { PageLayout } from "components/structure";
import { TopSection, MemberSection } from "components/about";

export default function About(props) {
    const [page] = get(props.data, "allContentfulAboutPage.edges");
    return (
        <PageLayout
            introComponent={<TopSection data={page.node} />}
        >
            <MemberSection data={page.node} />
        </PageLayout>
    );
}

export const PageQuery = graphql`
    query AboutPageQuery {
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
                                maxHeight: 200
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
