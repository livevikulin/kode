// @ts-ignore
import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`

export const Image = styled.div`
    width: 72px;
    height: 72px;
    margin-right: 16px;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
    > img {
        max-width: 100%;
        max-height: 100%;
    }
`

export const CardInfo = styled.div`
    > p {
        font-family: 'Inter-Medium', sans-serif;
        font-size: 16px;
        line-height: 20px;
        color: #050510;
        margin-top: 0;
        margin-bottom: 3px;
        > span {
            font-size: 14px;
            line-height: 18px;
            color: #97979b;
            margin-left: 4px;
        }
    }
    > span {
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #55555c;
    }
`
