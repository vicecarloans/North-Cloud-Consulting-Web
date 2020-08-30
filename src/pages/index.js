import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Layout } from 'antd'
import { Helmet } from 'react-helmet'

const { Header } = Layout

function RootIndex(props){
  return (
    <Layout className="layout">
      <Helmet title="North Cloud Consulting"/>
      <Header>
        <div></div>
      </Header>
    </Layout>
  )
}


export default RootIndex

export const pageQuery = graphql`
  
`
