import React from "react";
import { graphql } from "gatsby";
import { PageLayout } from "components/structure";

import { Intro, IntroContent, CompanyFeatures } from 'components/main'
import { get } from 'lodash'

function RootIndex(props) {
    const [main] = get(props.data, "allContentfulMainPage.edges")
    const siteTitle = get(props.data, "site.siteMetadata.title")

    return (
      <>
        <Intro data={main.node}>
          <PageLayout title={siteTitle} introComponent={<IntroContent data={main.node} />} location={props.location}>
            <CompanyFeatures data={main.node}/>
          </PageLayout>
        </Intro>
      </>
    );
}

export default RootIndex;

export const PageQuery = graphql`
  query MainPageQuery{
    site {
        siteMetadata {
            title
        }
    }
    allContentfulMainPage{
      edges{
        node{
          title
          subTitle
          backgroundImage{
            fluid(maxWidth: 1920, maxHeight: 1080, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          features {
            title
            description
            image{
              fixed(width: 64, height: 64) {
                ...GatsbyContentfulFixed
              }
            }
          }
          featureTitle
        }
      }
    }
  }
`;