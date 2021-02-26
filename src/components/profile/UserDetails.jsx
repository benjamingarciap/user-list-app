import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 400px;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  background-color: white;
`

const StyledAvatarImg = styled.img`
  width: 200px;
  height: 200px;
  margin: 15px;
`

const StyledName = styled.p`
  font-weight: bold;
  margin: 25px 0 0 0;
`

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 198px;
  height: 150px;
`

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cbcbcb;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  color: rgb(34, 34, 36);
  font-weight: bold;
  background-color: white;
  margin: ${props => props.delete ? '0 5px 0 0' : '0 0 0 5px'};
  text-align: center;
  :focus {
    outline: none;
  }
  :hover {
    color: white;
    background-color: rgb(34, 34, 36);
    border: 0;
  }
`

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const StyledLink = styled(Link)`
  font-weight: bold;
  color: #000000;
  margin: 9px 0 5px 0;
  text-align: center;
`

export default function UserDetails (props) {
  const {
    handleClickDelete,
    firstName,
    lastName,
    email,
    avatar,
    handleClickChangeTab
  } = props
  return (
    <StyledCardContainer>
      <StyledAvatarImg src={avatar} alt={'avatar'} />
      <StyledTextContainer>
      <StyledName>{ firstName }&nbsp;{ lastName }</StyledName>
        <p>{ email }</p>
        <StyledButtonWrapper>
          <StyledButton delete onClick={(e) => handleClickDelete(e)}>Delete</StyledButton>
          <StyledButton onClick={(e) => handleClickChangeTab('edit')}>Edit</StyledButton>
        </StyledButtonWrapper>
        <StyledLink to="/dashboard">User List</StyledLink>
      </StyledTextContainer>
    </StyledCardContainer>
  )
}

UserDetails.propTypes = {
  handleClickDelete: PropTypes.any,
  firstName: PropTypes.any,
  lastName: PropTypes.any,
  email: PropTypes.any,
  avatar: PropTypes.any,
  handleClickChangeTab: PropTypes.any
}
