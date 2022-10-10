import React from 'react'
import { Card, Image, CardInfo } from './styles'

interface IUserType {
    avatarUrl: string
    firstName: string
    lastName: string
    userTag: string
    position: string
}

interface IUser {
    item: IUserType
}

const User = ({ item }: IUser) => {
    const { avatarUrl, firstName, lastName, userTag, position } = item
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
