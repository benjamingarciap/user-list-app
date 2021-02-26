import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledEditUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  width: 200px;
  height: 30%;
  background-color: rgb(34, 34, 36);
  border-radius: 5px;
  filter: drop-shadow(0 0 10px #90a1a4);
`

const StyledForm = styled.form`
  color: white;
`

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`

const StyledInput = styled.input`
  border: 0;
  padding: 0 0 0 15px;
  width: 130%;
  height: 35px;
  border-radius: 5px;
  margin: 0 0 5px 0;
  color: rgb(34, 34, 36);
  :focus {
    outline: none;
  }
`

const StyledTitle = styled.h1`
  color: white;
  font-size: 2em;
  margin: 0;
`

const StyledLabel = styled.label`
  color: white;
  font-size: 1em;
  margin: 0 0 7px 0;
`

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  margin: ${props => props.update ? '0 5px 0 0' : '0 0 0 5px'};
  text-align: center;
  color: white;
  background-color: rgb(34, 34, 36);
  border: 1px solid white;
  :focus {
    outline: none;
  }
  :hover {
    border: 0;
    color: rgb(34, 34, 36);
    background-color: white;
  }
`

export default function EditUser (props) {
  const { firstName, lastName, email, userId, handleClickChangeTab, onHandleEditUser } = props
  const [userName, setName] = useState(firstName)
  const [userLastName, setLastName] = useState(lastName)
  const [userEmail, setUserEmail] = useState(email)

  const userData = {
    userId,
    userName,
    userLastName,
    userEmail
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()
    onHandleEditUser(userData)
  }

  return (
    <StyledEditUser>
        <StyledTitle>Edit User</StyledTitle>
        <StyledForm onSubmit={onHandleSubmit}>
          <StyledInputWrapper>
            <StyledLabel>New name</StyledLabel>
            <StyledInput defaultValue={ userName } type="text" name="password" onChange={(e) => setName(e.target.value)} />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel>New last name</StyledLabel>
            <StyledInput defaultValue={ userLastName } type="text" name="password" onChange={(e) => setLastName(e.target.value)} />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel>New email</StyledLabel>
            <StyledInput defaultValue={ userEmail } type="email" name="email" onChange={(e) => setUserEmail(e.target.value)}/>
          </StyledInputWrapper>
          <StyledButtonWrapper>
            <StyledButton update>Update</StyledButton>
            <StyledButton onClick={() => handleClickChangeTab('details')}>Cancel</StyledButton>
          </StyledButtonWrapper>
        </StyledForm>
    </StyledEditUser>
  )
}

EditUser.propTypes = {
  firstName: PropTypes.any,
  lastName: PropTypes.any,
  email: PropTypes.any,
  userId: PropTypes.any,
  handleClickChangeTab: PropTypes.any,
  onHandleEditUser: PropTypes.any
}
