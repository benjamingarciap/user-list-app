import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledTable = styled.table`
  width: 400px;
  height: 300px;
`

const StyledTHead = styled.thead`
  border-bottom: 1px solid black;
`

const StyledTRow = styled.tr`
 border-bottom: 1px solid black;
`

const StyledTh = styled.th`
  border-bottom: ${props => props.dark ? '1px solid #1f1f1f' : '1px solid #cbcbcb'};
  min-width: 30px;
`

const StyledTd = styled.td`
  border-bottom: ${props => props.dark ? '1px solid #1f1f1f' : '1px solid #cbcbcb'};
  text-align: center;
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
  border: 1px solid #cbcbcb;
  width: 40px;
  height: 35px;
  border-radius: 5px;
  color: rgb(34, 34, 36);
  font-weight: bold;
  background-color: white;
  :focus {
    outline: none;
  }
  :hover {
    color: white;
    background-color: rgb(34, 34, 36);
    border: 0;
  }
`

const StyledLink = styled(Link)`
  font-weight: bold;
  color: #000000;
`

const StyledUpdateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`

export default function UserList (props) {
  const { handleClick, userList, updatedAt } = props
  return (
    <StyledCenterContainer>
      <h1>User List</h1>
      <StyledTable>
        <StyledTHead>
          <StyledTRow>
            <StyledTh dark>#</StyledTh>
            <StyledTh dark>First name</StyledTh>
            <StyledTh dark>Last name</StyledTh>
          </StyledTRow>
        </StyledTHead>
        <tbody>
        {userList.data && userList.data.map((user) => {
          return <StyledTRow key={user.id}>
                 <StyledTh>{user.id}</StyledTh>
                    <StyledTd><StyledLink to={ `/profile/${user.id}` }>{user.first_name}</StyledLink></StyledTd>
                    <StyledTd>{user.last_name}</StyledTd>
                 </StyledTRow>
        })}
        </tbody>
      </StyledTable>
      <StyledButtonWrapper>
        <StyledButton onClick={(e) => handleClick(e)}>&lt;</StyledButton>
        <StyledButton onClick={(e) => handleClick(e)}>&gt;</StyledButton>
      </StyledButtonWrapper>
      <StyledUpdateWrapper>
        {updatedAt && <p>Last update: { updatedAt }</p>}
      </StyledUpdateWrapper>
    </StyledCenterContainer>
  )
}

UserList.propTypes = {
  handleClick: PropTypes.any,
  userList: PropTypes.any,
  updatedAt: PropTypes.any
}
