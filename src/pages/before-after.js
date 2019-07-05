import React, { useState } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function index(props) {
  const { data } = props
  const { english, french } = data

  const [language, setLanguage] = useState(english)

  function switchLang() {
    setLanguage(language === english ? french : english)
  }

  return (
    <Layout location={props.location} title="Before-After">
      <button onClick={switchLang}>Toggle language</button>
      <div dangerouslySetInnerHTML={{ __html: language.content }} />
    </Layout>
  )
}

export const query = graphql`
  query {
    english: wordpressPage(title: { eq: "Before / After" }) {
      content
    }
    french: wordpressPage(title: { eq: "Avant / Après" }) {
      content
    }
  }
`
