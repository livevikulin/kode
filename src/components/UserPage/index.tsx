import React from 'react'
import { IUser } from '../../types'
import { useParams, useNavigate } from 'react-router-dom'
import { getCategoryName } from '../../variables'
import { getBirthday, getAge } from '../../utils'
import { Header, Container, Box } from './styles'
import { IconStar, IconPhone, IconArrowLeft } from '../../svg'

const UserPage = ({ items }: any) => {
    const navigate = useNavigate()
    const params = useParams()
    const users = items.filter((item: IUser) => item.id === params.userId)
    const birthday = users.map((user: IUser) => user.birthday)

    const goBack = () => {
        navigate('/', { replace: true })
    }

    return users.map((user: IUser) => (
        <div key={user.id}>
            <Header>
                <img src={user.avatarUrl} alt="" />
                <p>
                    {user.firstName} {user.lastName}
                    <span>{user.userTag}</span>
                </p>
                <span>{getCategoryName(user.department)}</span>
                <button onClick={() => goBack()}>
                    <IconArrowLeft />
                </button>
            </Header>
            <Container>
                <Box>
                    <div>
                        <IconStar />
                        <p>{getBirthday(birthday[0])}</p>
                    </div>
                    <span>{getAge(birthday[0])}</span>
                </Box>
                <Box>
                    <div>
                        <IconPhone />
                        <a href={`"tel:${user.phone}"`}>{user.phone}</a>
                    </div>
                </Box>
            </Container>
        </div>
    ))
}

export default UserPage
