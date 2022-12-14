import React from "react";
import styled, { css } from "styled-components";
import { BiBed } from "react-icons/bi";
import {GrStatusGood} from 'react-icons/gr';
import {MdGppBad} from 'react-icons/md';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { UserImage } from "../components/Aside";




const KpiContainer = styled.div`
  
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 22px;
  span {
    display: block;
  }
  span:nth-of-type(1) {
    font-size: 1.875rem;
    font-weight: 600;
    color: #393939;
  }
  span:nth-of-type(2) {
    font-size: 0.875rem;
    font-weight: 300;
    color: #787878;
    margin-top: 4px;
  }
  .kpi-icon-container {
    background: #ffedec;
    border-radius: 8px;
    padding: 23px;
  }
`;
const RecentBookingSchedule = styled.div`
  
  grid-row:2/5;
  grid-column: 1/3;
`;
const RecentBooking = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 51px 14px 30px;
  .recent-booking {
    display: flex;
    gap: 21px;
    align-items: center;
    &__room-img {
      width: 154px;
      height: 92px;
      border-radius: 8px;
    }
    &__user-img {
      width: 39px;
      height: 39px;
      border-radius: 20px;
    }
    &__info {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    &__room-name {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0px;
      color: #393939;
      display: block;
      margin-bottom: 13px;
    }
    &__user-name,
    &__time {
      font-size: 0.875rem;
    }
    &__user-name {
      font-weight: 600;
    }
    &__time {
      color: #393939;
      font-weight: 300;
    }
  }
  .days {
    width: 53px;
    height: 53px;
    background: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }
`;
const Calendar = styled.div`
  height: 400px;
`;
const StatContainer = styled.div`
  background: #135846;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;
  color: #ffffff;
  padding: 39px 30px 30px 30px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:nth-of-type(1) {
      font-size: 14px;
    }
    span:nth-of-type(2) {
      font-size: 20px;
      font-weight: 600;
    }
  }
  progress {
    width: 100%;
  }
`;
const TotalStats = styled.div`
  padding: 29px 30px 35px 42px;
  background: #ffffff;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  grid-column: 3/5;
  .totalStats__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    span:nth-of-type(1) {
      font-size: 28px;
      font-weight: 600;
      color: #393939;
    }
    span:nth-of-type(2) {
      color: #6e6e6e;
    }
  }
  .totalStats__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .totalStats__row2 {
    margin-left: 11px;
    p:nth-of-type(1) {
      font-size: 1.25rem;
      font-weight: 600;
      color: #135846;
    }
    p:nth-of-type(2) {
      font-size: 0.75rem;
      color: #6e6e6e;
    }
  }
`;
const CustomerReviews = styled.div`
  grid-column: 1/5;
  padding: 30px 30px 70px 30px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;
 .customerReviews__title{
    font-size:20px;
    font-weight:600;
    color: #393939;
  }
  p{
    color: #4E4E4E;
  }
  .customerReviews__cardContainer{
    display:flex;
    flex-direction:row;
    align-items:center;
    gap: 40px;
    .arrow-icon{
        padding: 19px 16px;
        background: #135846;
        border-radius: 12px;
        margin-right:-60px;
    }
  }
  .customerReviews__card{
    background: #FFFFFF;
    border: 1px solid #EBEBEB;
    border-radius: 20px;
    padding:30px;
    p{
       margin-top:0;
       margin-bottom:52px;
    }
    span{
        display:block;
    }
  }
 
  .customerReviews__row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    .customerReviews__user{
        display:flex;
        gap:21px;
        align-items:center;
    }
  }
  .customerReviews__name{
    span:nth-of-type(1){
        color: #262626;
        font-weight:600;
    }
    span:nth-of-type(2){
        color: #799283;
        font-size: 0.875;
    }
}
  .customerReviews__icons{
    display:flex;
    gap: 16px;
  }
  svg{
    font-size:1.5rem;
  }
  
`;
const ReservationStats = styled.div`
  height: 400px;
  grid-column: 3/5;
`;
const DashboardMain = styled.main`
  position: relative;
  left: 17%;
  width: 83%;
  box-sizing: border-box;
  background-color: #f8f8f8;
  padding: 40px 50px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 38px;
  .kpi-container {
  }
`;
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
        <Calendar></Calendar>
        <hr></hr>
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
      </RecentBookingSchedule>
      <ReservationStats className="target-component"></ReservationStats>
      <StatContainer first>
        <div>
          <span>Available Room Today</span>
          <span>683</span>
        </div>
        <progress max="1000" value="70"></progress>
      </StatContainer>
      <StatContainer>
        <div>
          <span>Available Room Today</span>
          <span>684</span>
        </div>
        <progress max="1000" value="70"></progress>
      </StatContainer>
      <TotalStats className="totalStats">
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
      <CustomerReviews className="customerReviews">
        <p className="customerReviews__title">Latest Review by Customers</p>
        <div className="customerReviews__cardContainer">
            <div className="customerReviews__card">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam
                </p>
                <div className="customerReviews__row">
                    <div className="customerReviews__user">
                        <UserImage small></UserImage>
                        <div className="customerReviews__name">
                            <span>Kusnaidi Anderson</span>
                            <span>4m ago</span>
                        </div>
                    </div>
                    <div className="customerReviews__icons">
                        <GrStatusGood/>
                        <MdGppBad />
                    </div>
                </div>
            </div>
            <div className="customerReviews__card">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam
                </p>
                <div className="customerReviews__row">
                    <div className="customerReviews__user">
                        <UserImage small></UserImage>
                        <div className="customerReviews__name">
                            <span>Kusnaidi Anderson</span>
                            <span>4m ago</span>
                        </div>
                    </div>
                    <div className="customerReviews__icons">
                        <GrStatusGood/>
                        <MdGppBad />
                    </div>
                </div>
            </div>
            <div className="customerReviews__card">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam
                </p>
                <div className="customerReviews__row">
                    <div className="customerReviews__user">
                        <UserImage small></UserImage>
                        <div className="customerReviews__name">
                            <span>Kusnaidi Anderson</span>
                            <span>4m ago</span>
                        </div>
                    </div>
                    <div className="customerReviews__icons">
                        <GrStatusGood/>
                        <MdGppBad />
                    </div>
                </div>
            </div>
            <div>
                <AiOutlineArrowRight className="arrow-icon"/>
            </div>
        </div>
      </CustomerReviews>
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
