import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const BodyFrame = styled.div`
    padding-top: .5rem;
    padding-bottom: .5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    p {
        margin-bottom: .75rem;
        margin-top: .5rem;
        margin-block-start: .25rem;
        line-height: 1.25;
    }
`
const BigFrame = styled.div`
    max-width: 64rem;
    margin-right: auto;
    margin-left: auto;
    padding: 1rem;
`

export default function Layout(props) {
    return (
        <BigFrame>
            <Header title={props.title} />
            <BodyFrame>
                {props.children}
            </BodyFrame>
        </BigFrame>
    )
}
