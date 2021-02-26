import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { isLogin } from '../utils/token'
import { loginUserAction } from '../actions/login/loginActions'

const StyledCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const StyledLogin = styled.div`
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

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px 0 0 0;
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

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  width: 90px;
  height: 35px;
  border-radius: 5px;
  background-color: rgb(34, 34, 36);
  color: white;
  font-weight: bold;
  :focus {
    outline: none;
  }
  :hover {
    background-color: white;
    color: rgb(34, 34, 36);
  }
`

const StyledErrorMessage = styled.p`
  margin: 0;
  border-radius: 5px;
  color: #c46565;
  text-align: center;
  :focus {
    outline: none;
  }
`

const StyledErrorWrapper = styled.div`
  height: 18px;
`

const StyledTitle = styled.h1`
  color: white;
  font-size: 2em;
  margin: 0;
`

export default function LoginPage () {
  const error = useSelector(state => state.login.error)
  const loading = useSelector(state => state.login.loading)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onHandleLogin = (e) => {
    e.preventDefault()
    const data = {
      email, password
    }
    dispatch(loginUserAction(data))
  }

  if (isLogin()) {
    return <Redirect to="/dashboard/userlist" />
  } else {
    return (
      <StyledCenterContainer>
        {loading &&
          <>
            <h1>Loading</h1>
          </>
        }
        {!loading &&
          <StyledLogin>
            <StyledTitle>Login</StyledTitle>
            <StyledForm onSubmit={onHandleLogin}>
              <StyledInputWrapper>
                <StyledInput placeholder='email' type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
              </StyledInputWrapper>
              <StyledInputWrapper>
                <StyledInput placeholder='password' type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
              </StyledInputWrapper>
              <StyledErrorWrapper>
                {error &&
                  <StyledErrorMessage>
                    Wrong credentials
                  </StyledErrorMessage>
                }
              </StyledErrorWrapper>
              <StyledButtonWrapper>
                <StyledButton>Login</StyledButton>
              </StyledButtonWrapper>
            </StyledForm>
          </StyledLogin>
        }
      </StyledCenterContainer>
    )
  }
}
