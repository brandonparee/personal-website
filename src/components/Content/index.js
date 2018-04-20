import React from 'react'

const Content = ({ children, title }) => (
  <div className="section container main-content">
    {title && (
      <h1 className="title fancy-title has-text-centered">
        <span className="title-box">{title}</span>
      </h1>
    )}
    {children}
  </div>
)

export default Content
