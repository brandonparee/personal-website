import React from 'react'

const year = new Date().getFullYear()

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>Brandon Paree - {year}</p>
      </div>
    </div>
  </footer>
)

export default Footer
