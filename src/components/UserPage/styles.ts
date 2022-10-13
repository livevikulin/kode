// @ts-ignore
import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 72px 0 24px;
    background: #f7f7f8;
    position: relative;

    & button {
        outline: none;
        border: none;
        position: absolute;
        top: 24px;
        left: 24px;
        background: none;
        cursor: pointer;
    }
    & img {
        width: 104px;
        height: 104px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 24px;
    }

    & p {
        display: flex;
        align-items: center;
        font-family: 'Inter-Bold', sans-serif;
        font-size: 24px;
        line-height: 28px;
        color: #050510;
        margin-bottom: 12px;
        & span {
            font-family: 'Inter-Regular', sans-serif;
            font-size: 17px;
            color: #97979b;
            margin-left: 4px;
        }
    }

    & span {
        font-size: 13px;
        line-height: 16px;
        color: #55555c;
    }
`

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 8px 0 0;
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    & div {
        display: flex;
        align-items: center;
    }
    & p,
    span,
    a {
        font-family: 'Inter-Medium', sans-serif;
        font-size: 16px;
        line-height: 20px;
        color: #050510;
        text-decoration: none;
    }
    & span {
        color: #97979b;
    }
    & svg {
        margin-right: 12px;
    }
`
