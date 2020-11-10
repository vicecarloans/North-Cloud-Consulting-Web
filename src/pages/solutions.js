import React from "react";
import { PageLayout } from "components/structure";
import { TopSection, DetailSection } from "components/solutions";
import { graphql } from "gatsby";
import { get } from "lodash";

export default function Solutions(props) {
    const [page] = get(props.data, "allContentfulSolutionPage.edges");
    return (
        <PageLayout
            introComponent={<TopSection data={page.node} />}
        >
            <DetailSection solutions={page.node.solutions} />
        </PageLayout>
    );
}

export const PageQuery = graphql`
    query SolutionsPageQuery {
        allContentfulSolutionPage {
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
                    solutions {
                        title
                        subTitle
                        mainPoints
                        image {
                            fluid(maxWidth: 300, quality: 100) {
                                src
                            }
                        }
                    }
                }
            }
        }
    }
`;
