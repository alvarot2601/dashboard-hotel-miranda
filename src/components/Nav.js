import React from "react";
import styled, { css } from 'styled-components'
import { UserImage } from "./Aside";
import {BiLogOut} from 'react-icons/bi';
import {AiOutlineHeart, AiOutlineMessage, AiOutlineBell, AiOutlineArrowDown} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import {MdCompareArrows} from 'react-icons/md'; 
import {SiGooglemessages} from 'react-icons/si';
import { useNavigate } from "react-router";


const Nav = () => {
    const navigate = useNavigate();
    const closeAside = () => {
        const nav = document.querySelector("nav");
        const aside = document.querySelector("aside");
        const main = document.querySelector("main");
        if(nav.classList.contains('full'))
        {
            nav.classList.remove("full");
            main.classList.remove("full");
            aside.classList.remove('close')
        }
        else{
            aside.classList.add('close')
            nav.classList.add("full");
            main.classList.add("full");
        }
    }
    const logOutHandler = () => {
        localStorage.clear();
        navigate('/login');
    }
    return (
        <NavBar>
           <div>
                <MdCompareArrows onClick={closeAside}/> <span>Dashboard</span>
           </div>
           <IconContainer>
               <AiOutlineMessage/>
                <AiOutlineBell />
                <BiLogOut onClick={logOutHandler} />
           </IconContainer>
        </NavBar>
    );
}

const NavBar = styled.nav`
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
    .sup{ 
        padding:10px;
        border: 2px solid #FFFFF;
        background: #E23428;
        border: 2px solid #FFFFFF;
        border-radius: 8px;
        font-size:14p;
        font-weight:600;
        color:#FFF;
    }
    &.full{
        width:100%;
        left:0%;
    }
`;
const IconContainer = styled.div`
    display:flex;
    gap:55px;
    align-items:center;
    
`;
export default Nav;