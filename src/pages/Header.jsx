import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import * as types from '../actions/login/loginActions'
import { setLogout } from '../utils/token/'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const StyledNavbar = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(34, 34, 36);
  position: fixed;
`

const StyledIconWrapper = styled.span`
  margin: 13px 10px 0 60px;
`

const StyledLinkContainer = styled.ul`
  margin-right: 60px;
`

const StyledListItem = styled.li`
  list-style: none;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: white;
`

function Header (props) {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(types.logoutUser())
    setLogout()
  }
  return (
      <StyledNavbar>
        <StyledIconWrapper>
          <StyledLink to='/'>
            <FontAwesomeIcon icon={faUser} size="lg" color="white"/>
          </StyledLink>
        </StyledIconWrapper>
        <StyledLinkContainer>
          {isLoggedIn === false && <StyledListItem><StyledLink to="/login">Login</StyledLink></StyledListItem>}
          {isLoggedIn === true && <StyledLink to="/login" onClick={() => handleClick() }>Logout</StyledLink>}
        </StyledLinkContainer>
      </StyledNavbar>
  )
}

export default Header
