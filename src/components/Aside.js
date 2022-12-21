import React from "react";
import { Link } from "react-router-dom";
import {MdOutlineDashboard} from 'react-icons/md';
import {BsFillKeyFill, BsCalendarCheck} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa';
import {BiConversation} from 'react-icons/bi';
import { Button } from "./styled components/Button";

import { Sidebar, UserCard } from "./styled components/Sidebar";
import { UserImage } from "./styled components/UserImage";
import { Footer } from "./styled components/Footer";
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
            
            
            
            <UserCard className="userCard">
                <UserImage w_70></UserImage>
                <span className="userCard__name">William Johanson</span>
                <span className="userCard__mail">williamjohn@gmail.com</span>
                <Button contact_us>Contact Us</Button>
            </UserCard>
            <Footer className="footer">
                <p>Travl Hotel Admin Dashboard</p>
                <p className="footer__copyright">2020 All Rights Reserved</p>
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