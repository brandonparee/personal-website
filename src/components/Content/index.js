import React from 'react'
import Layout from '../Layout'

const Content = ({ children, title }) => (
  <Layout>
    <div className="section container main-content">
      {title && (
        <h1 className="title fancy-title has-text-centered">
          <span className="title-box">{title}</span>
        </h1>
      )}
      {children}
    </div>
  </Layout>
)

export default Content
