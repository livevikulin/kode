// @ts-ignore
import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-bottom: 14px;
    position: relative;
    > svg {
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
    }
    & input {
        width: 100%;
        font-size: 15px;
        line-height: 20px;
        color: #050510;
        background: #f7f7f8;
        border-radius: 16px;
        padding: 8px 44px;
        outline: none;
        border: none;
        caret-color: #6534ff;
        &::placeholder {
            color: #c3c3c6;
        }
    }
`

export const SortButton = styled.button`
    width: 24px;
    height: 24px;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline: none;
    border: none;
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
`
