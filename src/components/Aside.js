import React from "react";
import styled, { css } from 'styled-components'
import { Link } from "react-router-dom";
import {MdOutlineDashboard} from 'react-icons/md';
import {BsFillKeyFill, BsCalendarCheck} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa';
import {BiConversation} from 'react-icons/bi';
import {Sidebar, UserCard, UserImage, UserMail, UserName, ButtonGreen, Footer, FooterText, CopyrightText} from "../components/StyledComponents";

const Aside = () => {
    return (
        <Sidebar>
            <img src="" />
            <div className="linksContainer">
                <MdOutlineDashboard/>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="linksContainer">
                <BsFillKeyFill/>
                <Link to="/rooms">Room</Link>
            </div>
            <div className="linksContainer">
                <BsCalendarCheck/>
                <Link to="/bookings">Bookings</Link>
            </div>
            <div className="linksContainer">
                <BiConversation/>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="linksContainer">
                <FaUser/>
                <Link to="/users">Users</Link>
            </div>
            
            
            
            <UserCard>
                <UserImage w_70></UserImage>
                <UserName>William Johanson</UserName>
                <UserMail>williamjohn@gmail.com</UserMail>
                <ButtonGreen>Contact Us</ButtonGreen>
            </UserCard>
            <Footer>
                <FooterText>Travl Hotel Admin Dashboard</FooterText>
                <CopyrightText>2020 All Rights Reserved</CopyrightText>
            </Footer>
        </Sidebar>  
    );
}
export default Aside;
/*${props => {
        if(props.w_57){
            return `width:57px`;
        }
        else{
            return `width:57px`;
        }
    }} */