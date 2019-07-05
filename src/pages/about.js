import React, { useState } from "react"
import Layout, { options, SwitchButton } from "../components/Layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function About(props) {
  const { data } = props
  const { english, french } = data

  const [language, setLanguage] = useState(english)

  function switchLang() {
    setLanguage(language === english ? french : english)
  }

  return (
    <Layout location={props.location} title={english.title}>
      <SwitchButton
        switchFunction={switchLang}
        language={language}
        english={english}
      />
    </Layout>
  )
}

export const queryEnglish = graphql`
  query {
    english: contentfulPage(title: { eq: "About" }) {
      body {
        json
      }
      title
    }
    french: contentfulPage(title: { eq: "À propos" }) {
      body {
        json
      }
      title
    }
  }
`
