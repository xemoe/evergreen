import React from 'react'
import Link from 'gatsby-link'
import { Button } from '../../../src'
import logoStandalone from '../images/evergreen-logo-wordmark-white.svg'

const NativeLink = ({ ...props }) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default () => {
  return (
    <div className="MainLayout">
      <main className="MainLayout-main">
        <div className="MainLayout-content">
          <section className="Hero">
            <div className="Hero-inner">
              <img src={logoStandalone} alt="Evergreen" className="Hero-logo" />
              <h1>React UI Framework for the Web</h1>
              <p>
                Build and Maintained Open‑Source by{' '}
                <NativeLink className="Link" href="https://segment.com/">
                  Segment
                </NativeLink>
              </p>
              <div className="Hero-buttons">
                <Button
                  is={Link}
                  to="/components/"
                  appearance="green"
                  height={40}
                  marginRight={16}
                >
                  Components
                </Button>
                <NativeLink
                  href="https://github.com/segmentio/evergreen"
                  className="OutlineButtonWhite"
                  style={{
                    width: 136
                  }}
                >
                  GitHub
                </NativeLink>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
