import React from "react"
import styled, { keyframes } from "styled-components"

import { LoadingDotsProps, DotProps, WordsProps } from "./types"

import { mergeTheme } from "../../utils"

const BounceAnimation = keyframes`
  0% { transform: scale(0.1, 0.1) }
  50% { transform: scale(0.9, 0.9) }
  100% { transform: scale(0.1, 0.1) }
`

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Dot = styled.div<DotProps>`
  ${(props) => {
    const theme = mergeTheme(props)
    const {
      loader: { background, dotSize },
    } = theme
    return `
      background-color: ${background};
      border-radius: 50%;
      width: ${dotSize};
      height: ${dotSize};
      margin: 0 5px;
    `
  }}
  /* Animation */
    animation: ${BounceAnimation} 1s linear infinite;
  animation-delay: ${(props) => props.delay};
`

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Separator = styled.div`
  padding: 0 7px;
  &:before {
    content: "|";
  }
`

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

const Sentence = styled.div<WordsProps>`
  ${(props) => {
    const theme = mergeTheme(props)
    const {
      loader: {
        loadingText: { fontFamily, fontSize, color },
      },
    } = theme

    return `
  font-family: ${fontFamily};
  font-size: ${fontSize};
  margin: 0;
	text-align: left;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  color: ${color};
  .slidingWord {
    white-space: nowrap;
    font-weight: normal;
  }
  ${props.wordsWidth && `width: ${props.wordsWidth}px;`}
`
  }}
`

const Rotate = keyframes`
  0% { opacity: 0; }
  7% { opacity: 0; top: 50px; }
  10% { opacity: 1; top: 0px; }
  20% { opacity: 1; top: 0px; }
  25% { opacity: 0; top: -50px; }
  80% { opacity: 0; }
  100% { opacity: 0; }
`

const Words = styled.div`
  overflow: hidden;
  .slidingWord {
    opacity: 1;
    overflow: hidden;
    position: absolute;
    animation: ${Rotate} 15s linear infinite 0s;
    -ms-animation: ${Rotate} 15s linear infinite 0s;
    -webkit-animation: ${Rotate} 15s linear infinite 0s;
  }
  .stableWord {
    opacity: 0;
    white-space: nowrap;
    font-weight: normal;
  }
  .slidingWord:nth-child(2) {
    animation-delay: 2s;
    opacity: 0;
  }
  .slidingWord:nth-child(3) {
    animation-delay: 4s;
    opacity: 0;
  }
  .slidingWord:nth-child(4) {
    animation-delay: 6s;
    opacity: 0;
  }
  .slidingWord:nth-child(5) {
    animation-delay: 8s;
    opacity: 0;
  }
  .slidingWord:nth-child(6) {
    animation-delay: 10s;
    opacity: 0;
  }
  .slidingWord:nth-child(7) {
    animation-delay: 12s;
    opacity: 0;
  }
`

export function Loader(props: LoadingDotsProps) {
  const { productTitle, wordsWidth } = props
  return (
    <>
      <LoaderContainer>
        <DotWrapper>
          <Dot delay="0s" />
          <Dot delay=".3s" />
          <Dot delay=".5s" />
        </DotWrapper>
      </LoaderContainer>
      {productTitle && (
        <Wrapper>
          <Sentence wordsWidth={wordsWidth}>
            <div>{productTitle}</div>
            <Separator />
            <Words>
              <div className="slidingWord">Loading</div>
              <div className="slidingWord">載入中</div>
              <div className="slidingWord">로딩중</div>
              <div className="slidingWord">Memuatkan</div>
              <div className="slidingWord">Carregando</div>
              <div className="slidingWord">加载中</div>
              <div className="slidingWord">טעינה</div>
              <div className="stableWord">Loading</div>
            </Words>
          </Sentence>
        </Wrapper>
      )}
    </>
  )
}
