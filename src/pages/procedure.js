import React, { useState } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Procedure(props) {
  const { data, location } = props
  const { english, french } = data

  const [language, setLanguage] = useState(english)

  function switchLang() {
    setLanguage(language === english ? french : english)
  }

  return (
    <Layout location={location} title="Procedure">
      <button onClick={switchLang}>Toggle language</button>
      <div dangerouslySetInnerHTML={{ __html: language.content }} />
    </Layout>
  )
}

export const query = graphql`
  query {
    english: wordpressPage(title: { eq: "Procedure FAQ" }) {
      content
    }
    french: wordpressPage(title: { eq: "Opération / FAQ" }) {
      content
    }
  }
`
