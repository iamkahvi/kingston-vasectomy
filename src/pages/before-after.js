import React from "react";
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export default function index(props) {
    const { data } = props;
    const { markdownRemark } = data;

    return (
        <Layout location={props.location} title='Before-After'>
            <div dangerouslySetInnerHTML={{__html : markdownRemark.html }} />
        </Layout>
    )
}

export const query = graphql `
query {
    markdownRemark(frontmatter: {
            title: {
                eq: "before-after"
            }
        }) {
        html
    }
}
`