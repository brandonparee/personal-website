import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ExternalLink = ({ href, className, children }) => (
  <OutboundLink
    href={href}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </OutboundLink>
)

export default ExternalLink
