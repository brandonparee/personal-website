import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div className="react-content">
    <Helmet
      title="Brandon Paree"
      // meta={[
      //   { name: 'description', content: 'Sample' },
      //   { name: 'keywords', content: 'sample, something' },
      // ]}
    />
    <Header />

    {children()}

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
