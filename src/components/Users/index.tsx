import React from 'react'
import User from '../User'
import logoMagnifier from '../../images/magnifier.png'
import { Container, NoResult } from './styles'

interface UsersTypes {
    avatarUrl: string
    birthday: string
    department: string
    firstName: string
    id: string
    lastName: string
    phone: string
    position: string
    userTag: string
}

interface IUsers {
    items: UsersTypes[]
}

const Users = ({ items }: IUsers): JSX.Element => {
    return (
        <Container>
            {items.length > 0 ? (
                items.map((item) => <User key={item.id} item={item} />)
            ) : (
                <NoResult>
                    <img src={logoMagnifier} alt="" />
                    <p>Мы никого не нашли</p>
                    <span>Попробуй скорректировать запрос</span>
                </NoResult>
            )}
        </Container>
    )
}

export default Users
