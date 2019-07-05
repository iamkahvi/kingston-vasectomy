import React, { useState } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function About(props) {
  const { data } = props
  const { english, french } = data

  const [language, setLanguage] = useState(english)

  function switchLang() {
    setLanguage(language === english ? french : english)
  }

  return (
    <Layout location={props.location} title="About">
      <button onClick={switchLang}>Toggle language</button>
      <div dangerouslySetInnerHTML={{ __html: language.content }} />
    </Layout>
  )
}

export const queryEnglish = graphql`
  query {
    english: wordpressPage(title: { eq: "About Us" }) {
      content
    }
    french: wordpressPage(title: { eq: "À propos" }) {
      content
    }
  }
`
