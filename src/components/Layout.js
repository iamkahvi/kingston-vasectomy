import React from "react"
import Header from "./Header"
import styled from "styled-components"
import { BLOCKS } from "@contentful/rich-text-types"

const BodyFrame = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  p {
    font-size: 1rem;
    margin-bottom: 0.75rem;
    margin-top: 0.5rem;
    margin-block-start: 0.25rem;
    line-height: 1.25;
  }
  img {
    width: 25%;
    float: left;
    margin-right: 1rem;
  }
`
const BigFrame = styled.div`
  max-width: 48rem;
  margin-right: auto;
  margin-left: auto;
  padding: 1rem;
`
export const LangButton = styled.button`
  display: block;
  margin-bottom: 1rem;
  padding-left: 0;
  margin-left: 0;
  font-family: "serif";
  font-size: 1rem;
  text-decoration: none;
  background: none;
  border: none;
  :hover {
    text-decoration: underline;
  }
`

export function SwitchButton({ switchFunction, language, english }) {
  return (
    <LangButton onClick={switchFunction}>
      {language === english ? "En francais" : "In english"}
    </LangButton>
  )
}

export const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { title, file } = node.data.target.fields
      const assetType = file["en-US"].contentType

      return (
        <img
          title={title ? title["en-US"] : null}
          alt={file["en-US"].fileName}
          src={file["en-US"].url}
        />
      )
    },
  },
}

export default function Layout(props) {
  return (
    <BigFrame>
      <Header title={props.title} />
      <BodyFrame>{props.children}</BodyFrame>
    </BigFrame>
  )
}
