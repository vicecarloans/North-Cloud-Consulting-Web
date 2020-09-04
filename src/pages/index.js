import React from "react";
import { graphql } from "gatsby";
import { PageLayout } from "components/structure";
import { Intro, IntroContent, CompanyFeatures } from 'components/main'
import { get } from 'lodash'

function RootIndex(props) {
    const [main] = get(props.data, "allContentfulMainPage.edges")

    return (
      <>
        <Intro data={main.node}>
          <PageLayout introComponent={<IntroContent data={main.node} />} location={props.location}>
            <CompanyFeatures data={main.node}/>
          </PageLayout>
        </Intro>
      </>
    );
}

export default RootIndex;

export const PageQuery = graphql`
  query MainPageQuery{
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
              fluid(maxWidth: 64, maxHeight: 64, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid
              }
            }
          }
          featureTitle
        }
      }
    }
  }
`;