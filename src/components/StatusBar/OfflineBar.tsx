import React from 'react'
import { Wrapper } from './styles'

const OfflineBar = () => {
    return (
        <Wrapper background="#F44336">
            <h1>Поиск</h1>
            <p>Не могу обновить данные. Проверь соединение с интернетом.</p>
        </Wrapper>
    )
}

export default OfflineBar
