import React from 'react'
import { Card, Image, CardInfo } from './styles'

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

interface User {
    items: UsersTypes
}

const User = ({ items }: User): JSX.Element => {
    const { avatarUrl, firstName, lastName, userTag, position } = items
    return (
        <Card>
            <Image>
                <img src={avatarUrl} alt="" />
            </Image>
            <CardInfo>
                <p>
                    {firstName} {lastName} <span>{userTag && userTag}</span>
                </p>
                <span>{position}</span>
            </CardInfo>
        </Card>
    )
}

export default User
