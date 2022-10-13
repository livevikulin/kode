import React from 'react'
import { IUsers, IUser } from '../../types'
import './styles.scss'
import { Link } from 'react-router-dom'
import User from '../User'
import logoMagnifier from '../../images/magnifier.png'
import { Container, NoResult } from './styles'

const Users = ({ items }: IUsers): JSX.Element => {
    return (
        <Container>
            {items.length > 0 ? (
                items.map((item: IUser) => (
                    <Link className="link" key={item.id} to={`/${item.id}`}>
                        <User item={item} />
                    </Link>
                ))
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
