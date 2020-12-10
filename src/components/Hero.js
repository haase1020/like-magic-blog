import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'



const query = graphql`
  {
    believe: file(relativePath: {eq: "believe.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`



const Hero = ({showPerson}) => {
  const { believe } =useStaticQuery(query)
  return (
    <header className="hero">
      {showPerson && (
        <Image fluid={believe.childImageSharp.fluid}
        className="hero-person" />
      )}
      
    </header>
  )
}

export default Hero
