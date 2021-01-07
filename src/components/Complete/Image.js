import React from 'react'

import styled from 'styled-components'

const Image = ({ src, alt, ...props }) => {
  return (
    <ImageWrapper>
      <img src={src} alt={title} />
    </ImageWrapper>
  )
}

export default Image

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`
