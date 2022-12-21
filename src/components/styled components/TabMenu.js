import styled, { css } from 'styled-components'
export const TabMenu = styled.div`
    display:flex;
    button{
        border-bottom: 1px solid #D4D4D4;
        font-weight:500;
        color:#6E6E6E;
        background:transparent;
        width:auto;
        border-radius:0px;
        &.activeFilter{
            color:#135846;
            border-bottom: 2px solid #135846;
        }
        :hover{
            color:#135846;
            border-bottom: 2px solid #135846;
            cursor:pointer;
        }
    }
`;