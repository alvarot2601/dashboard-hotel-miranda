import React, { useEffect, useState } from "react";
import { UserImage } from "./Aside";
import {BiLogOut} from 'react-icons/bi';
import {AiOutlineHeart, AiOutlineMessage, AiOutlineBell, AiOutlineArrowDown} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import {MdCompareArrows} from 'react-icons/md'; 
import {SiGooglemessages} from 'react-icons/si';
import { useNavigate } from "react-router";
import { NavBar, IconContainer } from "./styled components/Navbar";
import { useLocation } from "react-router";
const Nav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [actualLocation, setActualLocation] = useState()
    useEffect(()=>{
        setActualLocation(location.pathname.substring(1))
    }, [location]);
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
                <MdCompareArrows onClick={closeAside}/>
                <span>{actualLocation}</span>
           </div>
           <IconContainer>
               <div className="icon-container">
                <AiOutlineMessage/>
                <span className="sup">1</span>
               </div>
                <div className="icon-container">
                    <AiOutlineBell />
                    <span className="sup">4</span>
                </div>
                <BiLogOut onClick={logOutHandler} />
           </IconContainer>
        </NavBar>
    );
}


export default Nav;