import React from 'react'
import { graphql } from "gatsby";
import { get } from 'lodash'
import { PageLayout } from 'components/structure'
import { TopSection, MemberSection } from 'components/about'

export default function About(props) {
    const [page] = get(props.data, "allContentfulAboutPage.edges")
    
    return (
        <PageLayout introComponent={<TopSection data={page.node} />}>
          <MemberSection data={page.node} />
        </PageLayout>
    )
}

export const PageQuery = graphql`
  query AboutPageQuery{
    allContentfulAboutPage{
      edges {
        node {
          title
          subTitle
          childContentfulAboutPageDescriptionTextNode {
            description
          }
          topSectionImage {
            fixed(width: 200, height: 200){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          memberSectionTitle
          consultants{
            name
            title
            childContentfulPersonShortBioTextNode {
              shortBio
            }
            email
            twitter
            linkedIn
            phone
            image {
              fluid(maxWidth: 100, maxHeight: 100, resizingBehavior: SCALE, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  }
`;