import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>AI Infra Handbook</span>,
  project: {
    link: 'https://github.com/sajjad2881/infra-handbook',
  },
  docsRepositoryBase: 'https://github.com/sajjad2881/infra-handbook/blob/main',
  footer: {
    text: 'Open Source under the MIT License',
  },
  search: {
    placeholder: 'Search...',
    loading: 'Loading...',
    error: 'Failed to load search'
  },
  head: () => {
    return (
      <>
        <title>AI Infra Handbook</title>
      </>
    )
  }
}

export default config
