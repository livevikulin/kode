// @ts-ignore
import styled from 'styled-components'

export const Wrapper = styled.div`
    background: ${(props: any) => props.background};
    padding: 16px 12px;
    margin-bottom: 8px;

    & h1 {
        color: #ffffff;
        padding: 0;
        margin: 0 0 20px;
    }

    & p {
        font-family: 'Inter-Medium', sans-serif;
        font-size: 13px;
        line-height: 16px;
        color: #ffffff;
    }
`
