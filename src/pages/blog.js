import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Content from '../components/Content'

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Content>
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
                        <time>{post.frontmatter.date}</time>
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
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`

export default Blog
