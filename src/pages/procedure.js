import React from "react";
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export default function index(props) {
    const { data } = props;
    const { wordpressPage } = data;

    return (
        <Layout location={props.location} title='Procedure'>
            <div dangerouslySetInnerHTML={{__html : wordpressPage.content }} />
        </Layout>
    )
}

export const query = graphql `
query {
  wordpressPage(title: {eq: "Procedure FAQ"}) {
    content
  }
}
`