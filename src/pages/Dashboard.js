import React from "react";
import { BiBed } from "react-icons/bi";
import {MdGppBad, MdOutlineGppGood} from 'react-icons/md';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {ReservationStats, CustomerReviews } from "../components/StyledComponents";
import { DashboardMain } from "../components/styled components/DashboardMain";
import { Link } from "react-router-dom";
import { TotalStats } from "../components/styled components/TotalStats";
import { StatContainer } from "../components/styled components/StatContainer"; 
import { RecentBooking, RecentBookingSchedule } from "../components/styled components/RecentBookingSchedule";
import { KpiContainer } from "../components/styled components/KpiContainer";
import CustomerReview from "../components/CustomerReview";
import Calendar from "../components/Calendar";
import D3 from "../components/D3";

const Dashboard = () => {
  
  return (
    <DashboardMain>
      <KpiContainer className="kpi-container target-component">
        <div className="kpi-icon-container">
          <BiBed />
        </div>
        <div>
          <span>8,641</span>
          <span>New Booking</span>
        </div>
      </KpiContainer>
      <KpiContainer className="kpi-container target-component">
        <div className="kpi-icon-container">
          <BiBed />
        </div>
        <div>
          <span>8,641</span>
          <span>Scheduled Room</span>
        </div>
      </KpiContainer>
      <KpiContainer className="kpi-container target-component">
        <div className="kpi-icon-container">
          <BiBed />
        </div>
        <div>
          <span>8,641</span>
          <span>Check In</span>
        </div>
      </KpiContainer>
      <KpiContainer className="kpi-container target-component">
        <div className="kpi-icon-container">
          <BiBed />
        </div>
        <div>
          <span>8,641</span>
          <span>Check Out</span>
        </div>
      </KpiContainer>
      <RecentBookingSchedule className="target-component">
        <Calendar>
          
        </Calendar>
        
        <div className="recent-booking-container">
        <RecentBooking>
          <div className="recent-booking recent-booking--first">
            <img
              className="recent-booking__room-img"
              src={require("../assets/images/room-1.jpg")}
            />
            <div>
              <span className="recent-booking__room-name">
                Queen Bed A-1234
              </span>
              <div className="recent-booking__info">
                <img
                  className="recent-booking__user-img"
                  src={require("../assets/images/room-1.jpg")}
                />
                <span className="recent-booking__user-name">James Sukardi</span>
                <span className="recent-booking__time">12min ago</span>
              </div>
            </div>
          </div>
          <span className="days">3</span>
        </RecentBooking>
        <RecentBooking>
          <div className="recent-booking">
            <img
              className="recent-booking__room-img"
              src={require("../assets/images/room-1.jpg")}
            />
            <div>
              <span className="recent-booking__room-name">
                Queen Bed A-1234
              </span>
              <div className="recent-booking__info">
                <img
                  className="recent-booking__user-img"
                  src={require("../assets/images/room-1.jpg")}
                />
                <span className="recent-booking__user-name">James Sukardi</span>
                <span className="recent-booking__time">12min ago</span>
              </div>
            </div>
          </div>
          <span className="days">3</span>
        </RecentBooking>
        <RecentBooking>
          <div className="recent-booking">
            <img
              className="recent-booking__room-img"
              src={require("../assets/images/room-1.jpg")}
            />
            <div>
              <span className="recent-booking__room-name">
                Queen Bed A-1234
              </span>
              <div className="recent-booking__info">
                <img
                  className="recent-booking__user-img"
                  src={require("../assets/images/room-1.jpg")}
                />
                <span className="recent-booking__user-name">James Sukardi</span>
                <span className="recent-booking__time">12min ago</span>
              </div>
            </div>
          </div>
          <span className="days">3</span>
        </RecentBooking>
        </div>
        <Link>View More</Link>
      </RecentBookingSchedule>
      <ReservationStats className="target-component">
        <D3/>
      </ReservationStats>
      <StatContainer first className="target-component target-component--2 target-component--green">
        <div>
          <span>Available Room Today</span>
          <span>683</span>
        </div>
        <progress max="1000" value="70"></progress>
      </StatContainer>
      <StatContainer className="target-component target-component--2 target-component--green">
        <div>
          <span>Available Room Today</span>
          <span>684</span>
        </div>
        <progress max="1000" value="70"></progress>
      </StatContainer>
      <TotalStats className="totalStats target-component target-component--2">
        <div className="totalStats__row">
          <div className="totalStats__info">
            <span>569</span>
            <span>Total Concierge</span>
          </div>
          <div className="totalStats__info">
            <span>569</span>
            <span>Total Customer</span>
          </div>
          <div className="totalStats__info">
            <span>569</span>
            <span>Total Room</span>
          </div>
          <div className="totalStats__info">
            <span>76k</span>
            <span>Total Transaction</span>
          </div>
        </div>
        <div className="totalStats__row2">
          <p>Let Travl Generate Your Annualy Report Easily</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labo
          </p>
        </div>
      </TotalStats>
      <CustomerReview></CustomerReview>
    </DashboardMain>
  );
};
export default Dashboard;
/*const TargetContainer = styled.div`
background: #ffffff;
box-shadow: 0px 4px 4px #00000005;
border-radius: 12px;
padding: ${props => {
    return props.kpiContainer ? "30px" : "70px"
}};
display: flex;
flex-direction: row;
align-items: center;
gap: 22px;
`; */
