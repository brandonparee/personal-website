import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

const IndexPage = ({ data: { backgroundImage } }) => {
  return (
    <Layout>
      <section className="hero custom-hero is-dark is-fullheight">
        <div className="hero-body">
          <Img fluid={backgroundImage.childImageSharp.fluid} />
          <div className="container">
            <div className="columns">
              <div className="column is-mobile is-one-third box has-text-right">
                <h1 className="title">Brandon Paree</h1>
                <h2 className="subtitle">Full Stack Developer</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const imageQuery = graphql`
  query ImageQuery {
    backgroundImage: file(relativePath: {eq: "background.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2400, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
