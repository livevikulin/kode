import React, { useState, useEffect } from 'react'
import Users from './components/Users'
import Search from './components/Search'
import Tabs from './components/Tabs'
import './app.scss'
import axios from 'axios'
// @ts-ignore
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`

const URL =
    'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__dynamic=true'

const App = (): JSX.Element => {
    const [allUsers, setAllUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [selectedDepartment, setSelectedDepartment] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        axios
            .get(URL)
            .then((response) => {
                const allUsers = response.data
                setAllUsers(allUsers.items)
                setFilteredUsers(allUsers.items)
            })
            .catch((error) => console.log(error))
    }, [])

    const onSelectedTab = (department: string) => {
        if (searchQuery !== '') setSearchQuery('')
        setSelectedDepartment(department)
    }

    const handleSearchChange = (e: string) => {
        setSelectedDepartment('all')
        setSearchQuery(e)
    }

    const users = searchQuery
        ? filteredUsers.filter(
              ({ firstName, lastName }: any) =>
                  firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  lastName.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : selectedDepartment
        ? filteredUsers.filter((user: any) => {
              if (selectedDepartment !== 'all') {
                  return user.department === selectedDepartment
              } else {
                  return allUsers
              }
          })
        : allUsers

    return (
        <Container>
            <h1>Поиск</h1>
            <Search value={searchQuery} handleChange={handleSearchChange} />
            {allUsers.length > 0 ? (
                <>
                    <Tabs
                        items={allUsers}
                        onSelectedTab={onSelectedTab}
                        selectedDepartment={selectedDepartment}
                    />
                    <Users items={users} />
                </>
            ) : (
                <span>Loading...</span>
            )}
        </Container>
    )
}

export default App
