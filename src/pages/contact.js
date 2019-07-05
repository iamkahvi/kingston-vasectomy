import React, { useState } from "react"
import Layout, { options, SwitchButton } from "../components/Layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function Contact(props) {
  const { data } = props

  const { english, french } = data
  const [language, setLanguage] = useState(english)

  function switchLang() {
    setLanguage(language === english ? french : english)
  }

  return (
    <Layout location={props.location} title="Contact">
      <SwitchButton
        switchFunction={switchLang}
        language={language}
        english={english}
      />
      {documentToReactComponents(language.body.json, options)}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.9813885974104!2d-76.57487868442863!3d44.24862582174149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2ac538346e281%3A0xd246603dfc2bbc99!2sKingston+Vasectomy+Clinic!5e0!3m2!1sen!2sca!4v1562349284185!5m2!1sen!2sca"
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </Layout>
  )
}

export const query = graphql`
  query {
    english: contentfulPage(title: { eq: "Contact Us" }) {
      body {
        json
      }
      title
    }
    french: contentfulPage(title: { eq: "Contactez-nous" }) {
      body {
        json
      }
      title
    }
  }
`
