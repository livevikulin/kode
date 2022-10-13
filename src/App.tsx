import React, { useState, useEffect } from 'react'
import { useOffline, useGetUsers } from './hooks'
import Users from './components/Users'
import TopAppBar from './components/TopAppBar'
import './app.scss'
// @ts-ignore
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import UserPage from './components/UserPage'
import { SkeletonUser } from './components/Skeletons'

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`

const App = (): JSX.Element => {
    const { users: allUsers, isLoading, refresh } = useGetUsers()
    const [selectedDepartment, setSelectedDepartment] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const { isOffline } = useOffline()

    useEffect(() => {}, [])

    const onSelectedTab = (department: string) => {
        if (searchQuery !== '') setSearchQuery('')
        // @ts-ignore
        const users = JSON.parse(localStorage.getItem('users'))
        const isNotFresh =
            users.timestamp + 3 * 1000 * 60 <= new Date().getTime()
        if (isNotFresh) refresh()
        setSelectedDepartment(department)
    }

    const handleSearchChange = (e: string) => {
        setSelectedDepartment('all')
        setSearchQuery(e)
    }

    const users = searchQuery
        ? allUsers.filter(
              ({ firstName, lastName }: any) =>
                  firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  lastName.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : selectedDepartment
        ? allUsers.filter((user: any) => {
              if (selectedDepartment !== 'all') {
                  return user.department === selectedDepartment
              } else {
                  return allUsers
              }
          })
        : allUsers

    return (
        <>
            <Routes>
                <Route
                    index
                    element={
                        <Container>
                            <TopAppBar
                                title="Поиск"
                                items={allUsers}
                                connection={isOffline}
                                searchQuery={searchQuery}
                                onSelectedTab={onSelectedTab}
                                selectedDepartment={selectedDepartment}
                                handleSearchChange={handleSearchChange}
                            />
                            {allUsers.length > 0 && !isLoading ? (
                                <Users items={users} />
                            ) : (
                                [0, 1, 2, 3, 4, 5].map((index) => (
                                    <SkeletonUser key={index} />
                                ))
                            )}
                        </Container>
                    }
                />
                <Route path=":userId" element={<UserPage items={users} />} />
            </Routes>
        </>
    )
}

export default App
