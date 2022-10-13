import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const URL =
    'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__dynamic=true'

const useGetUsers = () => {
    // const {setLocalStorage, getLocalstorage} = useLocalStorage(key)
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [needRefresh, toogleRefetch] = useState(false)

    useEffect(() => {
        setLoading(true)

        // @ts-ignore
        const users = JSON.parse(localStorage.getItem('users'))
        const isNotFresh =
            users.timestamp + 60 * 5 * 1000 <= new Date().getTime()

        if (users && !isNotFresh) {
            setUsers(users.items)
            setLoading(false)
            return
        }

        axios
            .get(URL)
            .then((response) => {
                const allUsers = response.data
                setUsers(allUsers.items)
                localStorage.setItem(
                    'users',
                    JSON.stringify({
                        items: allUsers.items,
                        timestamp: new Date().getTime(),
                    })
                )
            })
            .finally(() => setLoading(false))
            .catch((error) => console.log(error))
    }, [needRefresh])

    const refresh = useCallback(() => toogleRefetch((prev) => !prev), [])

    return {
        isLoading,
        users,
        refresh,
    }
}

export default useGetUsers
