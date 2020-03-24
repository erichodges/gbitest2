import React from 'react'
import StyledBackgroundSection from '../components/BackgroundSection'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { StyledContentWrapperLeft, StyledImageWrapper, StyledLink, StyledWrapper } from '../components/SharedStyledComponents'


const IndexPage = () => (
  <Layout>
    <StyledBackgroundSection>
      <StyledWrapper>
        <StyledContentWrapperLeft>
          <div>
            <SEO
              title="gatsby-background-image/src test"
              keywords={[`gatsby`, `application`, `react`]}
            />
            <h1>Hi everyone</h1>
            <p>
              Welcome to the <code>gatsby-background-image/src</code> test site.
            </p>
            <p>
              As the left background, you see an image rendered by{' '}
              <code>gatsby-background-image/src</code>
            </p>
            <p>
              To the right, the same image rendered by <code>gatsby-image</code>
            </p>
            <StyledImageWrapper>
              
            </StyledImageWrapper>
            Go to <StyledLink to="/image-stack/">image stack</StyledLink> to
            see an example of
            <strong> multiple stacked background images</strong>.<br/>
            Go to <StyledLink to="/art-direction/">art direction</StyledLink> to
            see an example of
            <strong> art-directed background images</strong>.
          </div>
        </StyledContentWrapperLeft>
      </StyledWrapper>
    </StyledBackgroundSection>
  </Layout>
)

export default IndexPage
