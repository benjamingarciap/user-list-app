import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getUserDetails, deleteUser, setActiveTab, editUser } from '../actions/userDetails/userDetailsActions'

import UserDetails from '../components/profile/UserDetails'
import EditUser from '../components/profile/EditUser'
import styled from 'styled-components'

const StyledCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export default function Profile (props) {
  const dispatch = useDispatch()
  const userDetails = useSelector(state => state.userDetails.details)
  const loading = useSelector(state => state.userDetails.loading)
  const userDeleted = useSelector(state => state.userDetails.userDeleted)
  const activeTab = useSelector(state => state.userDetails.activeTab)
  const userId = props.match.params.userid // eslint-disable-line
  const history = props.history // eslint-disable-line
  const { first_name, email, avatar, last_name } = userDetails // eslint-disable-line

  useEffect(() => {
    dispatch(getUserDetails(userId))
  }, [activeTab])

  const handleClickDelete = (e) => {
    e.preventDefault()
    dispatch(deleteUser(userId))
  }

  const handleClickChangeTab = (tab) => {
    dispatch(setActiveTab(tab))
  }

  const onHandleEditUser = (data) => {
    dispatch(editUser(data))
    history.push('/dashboard') // eslint-disable-line
  }

  return (
    <StyledCenterContainer>
      {userDeleted && <Redirect to="/dashboard/userlist" />}
      {!loading && activeTab === 'details' &&
       <>
         <UserDetails
            handleClickDelete={handleClickDelete}
            handleClickChangeTab={handleClickChangeTab}
            firstName={first_name} // eslint-disable-line
            lastName={last_name} // eslint-disable-line
            email={email}
            avatar={avatar}
          />
       </>
      }
      {!loading && activeTab === 'edit' &&
       <>
         <EditUser
           handleClickChangeTab={handleClickChangeTab}
           onHandleEditUser={onHandleEditUser}
           firstName={first_name} // eslint-disable-line
           lastName={last_name} // eslint-disable-line
           email={email}
           avatar={avatar}
           userId={userId}
           history={history}
           />
        </>
      }
      {loading &&
        <>
          <h1>Loading</h1>
        </>
      }
    </StyledCenterContainer>
  )
}
