import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { isLogin } from '../utils/token'
import styled from 'styled-components'

const StyledCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const StyledHero = styled.div`
  justify-content: flex-start;
  padding: 100px;
  width: 70%;
  height: 30%;
  background-color: rgb(34, 34, 36);
  border-radius: 5px;
  margin:0 0 100px 0;
`
const StyledHeroTitle = styled.h1`
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  color: white;
  font-size: 3.5em;
  margin: 0;
`

const StyledHeroParagraph = styled.p`
  font-family: sans-serif;
  color: white;
  font-size: 1.5em;
`

const StyledLink = styled(Link)`
  font-weight: bold;
  color: white;
  font-size: 1.5em;
`

// const StyledContentWrapper = styled.div`
//   margin: 0 0 150px 0;
// `

export default function LandingPage () {
  const loading = useSelector(state => state.login.loading)
  if (isLogin()) {
    return <Redirect to="/dashboard/userlist" />
  } else if (!loading) {
    return (
      <StyledCenterContainer>
        <StyledHero>
            <StyledHeroTitle>User list</StyledHeroTitle>
            <StyledHeroParagraph>Multiple lines of text that form the lede,
              informing new readers quickly and efficiently about what’s most
              interesting in this post’s contents.
            </StyledHeroParagraph>
            <StyledLink to="/login">Login now!</StyledLink>
        </StyledHero>
      </StyledCenterContainer>
    )
  } else {
    return (
      <>
      <h1>Loading</h1>
      </>
    )
  }
}
