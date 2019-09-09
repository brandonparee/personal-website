import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import moment from 'moment'

import Content from '../components/Content'

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Content title='Blog'>
      <div className="columns is-multiline">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="column is-half is-mobile" key={post.id}>
                <Link to={post.frontmatter.path}>
                  <div className="card">
                    <div className="card-content">
                      <p className="title is-4">{post.frontmatter.title}</p>
                      <div className="content">
                        <p>{post.excerpt}</p>
                        <br />
                        <time>{moment(post.frontmatter.date).format('MMMM DD, YYYY')}</time>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
      </div>
    </Content>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`

export default Blog
