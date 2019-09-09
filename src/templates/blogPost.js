import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Content from '../components/Content'

const Template = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Content>
      <div>
        <Helmet title={`Brandon Paree - ${post.frontmatter.title}`} />
        <div className="content markdown">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Content>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

export default Template
