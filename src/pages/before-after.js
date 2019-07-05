import React, { useState } from "react"
import Layout, { options, SwitchButton } from "../components/Layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function index(props) {
  const { data } = props
  const { english, french } = data

  const [language, setLanguage] = useState(english)

  function switchLang() {
    setLanguage(language === english ? french : english)
  }

  return (
    <Layout location={props.location} title="Before-After">
      <SwitchButton
        switchFunction={switchLang}
        language={language}
        english={english}
      />
      {documentToReactComponents(language.body.json, options)}
    </Layout>
  )
}

export const query = graphql`
  query {
    english: contentfulPage(title: { eq: "Before / After" }) {
      body {
        json
      }
      title
    }
    french: contentfulPage(title: { eq: "Avant / Après" }) {
      body {
        json
      }
      title
    }
  }
`
