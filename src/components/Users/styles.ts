// @ts-ignore
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const NoResult = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    & p {
        font-family: 'Inter-SemiBold', sans-serif;
        font-size: 17px;
        line-height: 22px;
        text-align: center;
        color: #050510;
        margin: 8px 0 12px;
    }
    & span {
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #97979b;
    }
`
