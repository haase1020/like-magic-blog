import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'

export const query = graphql`
  {
    person: file(relativePath: { eq: "banner-about.jpeg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)
  return (
    <Wrapper>
      <Title title="Welcome!" />
      <Image fixed={data.person.childImageSharp.fixed} className="img" />
      <p>I'm Mandi Haase, a software developer and homeschooling mom </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
    transition: all 1s;
  }
  .img:hover {
    transition: all 1s;
    box-shadow: 0 0 20px 10px var(--clr-primary-8);
  }
`
export default About
