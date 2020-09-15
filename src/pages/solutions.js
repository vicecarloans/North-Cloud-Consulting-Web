import React from 'react'
import { PageLayout } from "components/structure";
import { TopSection, DetailSection } from 'components/solutions';
import { graphql } from "gatsby";
import { get } from 'lodash'

export default function Solutions(props) {
    const [page] = get(props.data, "allContentfulSolutionPage.edges") 
    const siteTitle = get(props.data, "site.siteMetadata.title")
    return (
        <PageLayout title={siteTitle} introComponent={<TopSection data={page.node} />}>
          <DetailSection solutions={page.node.solutions} />
        </PageLayout>
    )
}

export const PageQuery = graphql`
  query SolutionsPageQuery{
    site {
        siteMetadata {
            title
        }
    }
    allContentfulSolutionPage{
      edges {
        node {
          title
          subTitle
          description {
              description
          }
          topSectionImage {
            fixed(width: 200, height: 200){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          solutions {
            title
            subTitle
            mainPoints
            image {
              fluid(maxWidth: 250, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  }
`;