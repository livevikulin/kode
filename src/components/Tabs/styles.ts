// @ts-ignore
import styled from 'styled-components'

export const TabsContainer = styled.ul`
    display: flex;
    list-style: none;
    border-bottom: 1px solid #696970;
    padding: 0;
    margin-bottom: 22px;

    & li {
        font-family: 'Inter-Medium', sans-serif;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        color: #97979b;
        padding: 8px 12px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
    }
    & .active {
        color: #050510;
        border-color: #6534ff;
    }
`
