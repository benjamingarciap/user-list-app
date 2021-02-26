import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getUsers, changeUserPage } from '../actions/userList/userListActions'
import { deleteUserReset, setActiveTab } from '../actions/userDetails/userDetailsActions'

import UserList from '../components/dashboard/UserList'

const StyledCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

function DashboardPage () {
  const dispatch = useDispatch()
  const userList = useSelector(state => state.userList.users)
  const updatedAt = useSelector(state => state.userDetails.updatedAt)
  const [usersPage, setUsersPage] = useState(1)

  useEffect(() => {
    dispatch(getUsers(usersPage))
    dispatch(deleteUserReset())
    dispatch(setActiveTab('details'))
  }, [usersPage, dispatch])

  const handleClickPagination = (e) => {
    const maxPages = userList.total_pages
    const button = e.target.innerText
    dispatch(changeUserPage(button))
    if (usersPage > 1 && button === '<') {
      setUsersPage(prevState => prevState - 1)
    } else if (usersPage < maxPages && button === '>') {
      setUsersPage(prevState => prevState + 1)
    }
  }

  return (
    <StyledCenterContainer>
      <UserList
        userList={userList}
        handleClick={handleClickPagination}
        updatedAt={updatedAt}
      />
    </StyledCenterContainer>
  )
}

export default DashboardPage
