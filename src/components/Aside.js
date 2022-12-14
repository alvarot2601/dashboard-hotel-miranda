import React from "react";
import styled, { css } from 'styled-components'
import { Link, Outlet } from "react-router-dom";
import {MdOutlineDashboard} from 'react-icons/md';

const Sidebar = styled.aside`
    width:17vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 55px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 13px 3px 40px #00000005;
    position:absolute;
    top:0;
    a{
        font-weight:600;
        font-size:18px;
        color: #799283;
        text-decoration:none;
    }
    .linksContainer{
        min-height:65px;
        width:100%;
        display:flex;
        align-items:center;
        gap:16px;
        svg{
            font-size:27px;
            margin-left:56px;

        }
    }
    .linksContainer:hover{
        border-left:8px solid #E23428;
        border-radius: 0px 6px 6px 0px;
        *{
            color:#E23428;
        }
    }
`;
const UserCard = styled.div`
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    max-width:233px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:15px;
    padding:0px 40px 25px 40px;
`;
/*const Link = styled.a`
    font-size:18px;
    letter-spacing: 0px;
    color: #799283;
`;*/
export const UserImage = styled.div`
    width:${props => props.small ? "57px" : "70px"};
    height:${props => props.small ? "57px" : "70px"};
    background: #C5C5C5 0% 0% no-repeat padding-box;
    border-radius: 8px;
`;
const ButtonGreen = styled.div`
    background: #EBF1EF 0% 0% no-repeat padding-box;
    border-radius: 8px;
    font: normal normal 600 14px/21px Poppins;
    letter-spacing: 0px;
    color: #135846;
    padding:14px 38px;
`;
const UserName = styled.span`
    text-align: center;
    font-weight:500;
    letter-spacing: 0px;
    color: #393939;
`;
const UserMail = styled.span`
    font-size:12px;
    letter-spacing: 0px;
    color: #B2B2B2;
`;
const Footer = styled.div`
    font-size:12px;
    letter-spacing: 0px;
    color: #B2B2B2;
`;
const FooterText = styled.p`
    font-size: 16px;
    font-weight:600;
    letter-spacing: 0px;
    color: #212121;
`;
const CopyrightText = styled.p`
    font-size: 14px;
    font-weight:300;
    letter-spacing: 0px;
    color: #799283;
`;
const Aside = () => {
    return (
        <Sidebar>
            <img src="" />
            <div className="linksContainer">
                <MdOutlineDashboard/>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="linksContainer">
                <MdOutlineDashboard/>
                <Link to="/rooms">Room</Link>
            </div>
            <div className="linksContainer">
                <MdOutlineDashboard/>
                <Link to="/bookings">Bookings</Link>
            </div>
            <div className="linksContainer">
                <MdOutlineDashboard/>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="linksContainer">
                <MdOutlineDashboard/>
                <Link to="/users">Users</Link>
            </div>
            
            
            
            <UserCard>
                <UserImage></UserImage>
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