import React from "react"
import styled from "styled-components"
import { ModalProps } from "./types"

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ModalBackdrop = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  z-index: 100000;
  max-height: calc(100vh - 148px);
  background-color: #28262c;
  width: calc(50% - 48px);
  overflow: auto;
  padding: 24px;

  @media screen and (max-width: 1200px) {
    width: calc(80% - 48px);
  }
  @media screen and (max-width: 750px) {
    min-height: 100vh;
    height: 100vh;
    width: calc(100% - 48px);
  }
`
const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`
const CloseWrapper = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    transition: all ease 0.4s;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
`
const ModalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  width: calc((100% / 12) * 6 - 20px);
  min-width: calc((100% / 12) * 6 - 20px);
  @media screen and (max-width: 750px) {
    width: 80%;
    max-width: 80%;
  }
`
const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ModalTitle = styled.h5`
  font-size: 28px;
  font-weight: 400;
  color: white;
  margin: 0px;
`
const ModalDescription = styled.h5`
  color: #a5a8a9;
  font-size: 12px;
  margin: 0px;
`

export const Modal = (props: ModalProps) => {
  let { title, description, close, children } = props
  return (
    <ModalWrapper>
      <ModalBackdrop onClick={() => close()} />
      <ModalContent>
        <ModalHeader>
          <ModalTitleWrapper>
            <ModalTitle>{title}</ModalTitle>
            {description && <ModalDescription>{description}</ModalDescription>}
          </ModalTitleWrapper>
          <CloseWrapper onClick={() => close()}>{props.icon}</CloseWrapper>
        </ModalHeader>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </ModalContent>
    </ModalWrapper>
  )
}
export default Modal
