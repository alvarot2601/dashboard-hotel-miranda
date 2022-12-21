import React from "react";
import styled, { css } from 'styled-components'

export const NavBar = styled.nav`
    height: 120px;
    background: #FFFFFF;
    box-shadow: 0px 3px 10px #00000005;
    position:relative;
    left: 17.96%;
    width: 82.04%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0px 30px;
    
    box-sizing:border-box;
    > div:first-child{
        display:flex;
        align-items:center;
    }
    span{
        color: #262626;
        font-weight:600;
        font-size: 1.75rem;
        margin-left:30px;
    }
    svg{
        color:#135846;
        font-size:2rem;
    }
    svg:hover{
        cursor:pointer;
    }
    .icon-container{
        position:relative;
    }
    .sup{
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius: 8px;
        width:30px;
        height:30px;
        background: #E23428;
        border: 2px solid #FFFFFF;
        font-size:14px;
        font-weight:600;
        color:#FFF;
        position:absolute;
        bottom:25px;
        left:-12px;
    }
    &.full{
        width:100%;
        left:0%;
    }
`;
export const IconContainer = styled.div`
    display:flex;
    gap:55px;
    align-items:center;
    
`;
