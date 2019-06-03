import React from 'react'
import Helmet from 'react-helmet'

import Header from '../Header'
import Footer from '../Footer'

import './index.scss'

const Layout = ({ children }) => (
  <div className="react-content">
    <Helmet
      title="Brandon Paree"
    />
    <Header />

    {children}

    <Footer />
  </div>
)

export default Layout
