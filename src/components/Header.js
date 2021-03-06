import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import KVLogo from "../../static/media/KVLogoMed.png"

export default function Header(props) {
  const Nav = styled.div`
    margin-top: 1rem;
    text-align: right;
    float: right;
    display: inline;
    font-size: 1rem;
    @media only screen and (max-width: 678px) {
      text-align: center;
      width: 100%;
    }
  `

  const Title = styled.h1`
    font-family: "serif";
    font-weight: 300;
    font-size: 2rem;
    padding-right: 0.5rem;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
    float: left;
    @media only screen and (max-width: 678px) {
      display: none;
    }
  `

  const HeaderFrame = styled.section`
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    border-bottom: 1px solid;
    height: 2.5rem;
  `

  const LogoFrame = styled.img`
    width: 15rem;
    border: 2px solid;
  `

  const StyledLink = styled(props => <Link {...props} />)`
    margin-left: 1rem;
    font-family: "times";
    text-decoration: none;
    color: black;
  `
  const activeLinkStyle = {
    color: "grey",
  }

  return (
    <HeaderFrame>
      <Title>{props.title}</Title>
      {/* <LogoFrame src={KVLogo} alt="KV Logo"/> */}
      <Nav>
        <StyledLink activeStyle={activeLinkStyle} to="/">
          Home
        </StyledLink>
        <StyledLink
          activeStyle={activeLinkStyle}
          state={{ language: "eng" }}
          to="/procedure"
        >
          Procedure
        </StyledLink>
        <StyledLink activeStyle={activeLinkStyle} to="/before-after">
          Before/After
        </StyledLink>
        <StyledLink activeStyle={activeLinkStyle} to="/about">
          About
        </StyledLink>
        <StyledLink activeStyle={activeLinkStyle} to="/contact">
          Contact
        </StyledLink>
      </Nav>
    </HeaderFrame>
  )
}
