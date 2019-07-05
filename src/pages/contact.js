import React from "react";
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export default function index(props) {
    const { data } = props;
    const { english, french } = data;

    return (
        <Layout location={props.location} title='Contact'>
            <div dangerouslySetInnerHTML={{ __html: english.content }} />
        </Layout>
    )
}

export const query = graphql `
query {
  english: wordpressPage(title: {eq: "Contact Us"}) {
    content
  }
  french: wordpressPage(title: {eq: "Contactez-nous"}) {
    content
  }
}
`