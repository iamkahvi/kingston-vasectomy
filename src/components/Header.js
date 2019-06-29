import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default function Header(props) {

    const Nav = styled.div`
        text-align: right;
        float: right;
        display: inline;
        font-size: 1.25rem;
    `

    const Title = styled.h1`
        font-family: 'helvetica neue', helvetica;
        font-weight: bold;
        font-size: 2.5rem;
        padding-top: 0;
        padding-bottom: 0;
        margin-top: 0;
        margin-bottom: 0;
        float: left;
    `

    const HeaderFrame = styled.section`
        margin-top: 1rem;
        margin-bottom: 0;
        width: 100%;
        height: 3rem;
        border-bottom: 2px solid;
    `

    const StyledLink = styled(props => <Link {...props} />)`
        margin-left: 1rem;
        font-family: 'helvetica neue', helvetica;
        font-weight: bold;
        text-decoration: none;
        color: black;
    `
    const activeLinkStyle = {
        // borderBottom: '2px solid',
        color: 'grey',
    };

    return (
        <HeaderFrame>
            <Title>
                {props.title}
            </Title>
            <Nav>
                <StyledLink activeStyle={activeLinkStyle} to="/">Home</StyledLink>
                <StyledLink activeStyle={activeLinkStyle} to="/about">About</StyledLink>
                <StyledLink activeStyle={activeLinkStyle} to="/contact">Contact</StyledLink>
                <StyledLink activeStyle={activeLinkStyle} to="/before-after">Before-After</StyledLink>
                <StyledLink activeStyle={activeLinkStyle} to="/procedure">Procedure</StyledLink>
            </Nav>
        </HeaderFrame>
    )
}
