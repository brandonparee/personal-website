import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import moment from 'moment'

import Content from '../components/Content'

const Portfolio = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Content title="Portfolio">
      <div className="columns is-multiline">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="column is-half is-mobile" key={post.id}>
                <Link to={post.frontmatter.path}>
                  <div className="card">
                    <div className="card-image">
                      {post.frontmatter.image ? (
                        <Img
                          alt={post.frontmatter.image.alt}
                          sizes={
                            post.frontmatter.image.src.childImageSharp.sizes
                          }
                        />
                      ) : (
                        <img
                          style={{ width: '100%' }}
                          src="http://via.placeholder.com/1200x900"
                          alt="placeholder"
                        />
                      )}
                    </div>
                    <div className="card-content">
                      <p className="title is-4">{post.frontmatter.title}</p>

                      <div className="content">
                        <p>{post.frontmatter.description}</p>
                        <br />
                        <time>{moment(post.frontmatter.date).format('MMMM YYYY')}</time>
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
  query PortfolioQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date
            path
            description
            image {
              alt
              src {
                childImageSharp {
                  sizes(quality: 90, maxWidth: 1200) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                    originalImg
                    originalName
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Portfolio
