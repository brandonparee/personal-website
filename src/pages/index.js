import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => {
  return (
    <section className="hero custom-hero is-dark is-fullheight">
      <div className="hero-body">
        <Img sizes={data.file.childImageSharp.sizes} />
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
  )
}

export default IndexPage

export const imageQuery = graphql`
query ImageQuery {
  file(relativePath: { regex: "/background.jpg/" }) {
    childImageSharp {
      sizes(quality: 100, maxWidth: 1200) {
        base64
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        originalImg
        originalName
      }
    }
  }
}
`;