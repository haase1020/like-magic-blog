import React from 'react'

import styled from 'styled-components'

const Image = ({ src, alt }) => {
  return (
    <ImageWrapper>
      <ImageContainer src={src} alt={alt} />
    </ImageWrapper>
  )
}

export default Image

const ImageWrapper = styled.div`
  margin: 5px;
  position: relative;
`
const ImageContainer = styled.img`
  margin: 5px;
  width: 100px;
  height: 100px;
`
