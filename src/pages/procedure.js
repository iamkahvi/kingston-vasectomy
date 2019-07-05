import React, { useState } from "react"
import Layout, { options, SwitchButton } from "../components/Layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function Procedure(props) {
  const { data, location } = props
  const { english, french } = data

  const [language, setLanguage] = useState(english)

  function switchLang() {
    setLanguage(language === english ? french : english)
  }

  return (
    <Layout location={location} title="Procedure">
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
    english: contentfulPage(title: { eq: "Procedure" }) {
      body {
        json
      }
      title
    }
    french: contentfulPage(title: { eq: "Opération" }) {
      body {
        json
      }
      title
    }
  }
`
