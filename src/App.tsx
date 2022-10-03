import React, { useState, useEffect } from 'react'
import User from './components/User'
import Search from './components/Search'
import './app.scss'
import axios from 'axios'
// @ts-ignore
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`

const URL =
    'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all'

const App = (): JSX.Element => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get(URL)
            .then((response) => {
                const allUsers = response.data
                setUsers(allUsers.items)
            })
            .catch((error) => console.log(error))
    }, [setUsers])

    console.log('users => ', users)

    return (
        <Container>
            <h1>Поиск</h1>
            <Search />
            <div>
                {users.length > 0 &&
                    // @ts-ignore
                    users.map((user) => <User key={user.id} items={user} />)}
            </div>
        </Container>
    )
}

export default App
