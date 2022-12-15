import React from 'react';
import styled, { css } from 'styled-components'
export const Table = styled.table`
    width:100%;
    margin-top:35px;
    border-spacing: 10px;
    color:#393939;
    border-collapse: separate;
    border-spacing: 0px 0px;
    text-align:left;
    font-weight:400;
    svg:hover{
        cursor:pointer;
    }
    .table{
        &__bookingId, &__roomNumber{
            font-weight:600;
            color: #799283;
        }
        &__inline{
            display: inline;
          }
        &__inactive{
            color:#E23428;
        }
        &__active{
            color:#5AD07A;
        }
    }
    
    tr{
        border-bottom: 1px solid #F5F5F5 ;
    }
    
    th,td{
        padding:21px 0px;
    }
    th{
        border-bottom: 1pt solid #F5F5F5 ;
        font-weight:600;
    }
    td{
      max-width:250px;
      vertical-align:top;
      border-bottom: 1pt solid #F5F5F5;
    }
    td.flex{
        display:flex;
        align-items:center;
        gap:16px;
    }
    td:nth-of-type(1), th:nth-of-type(1){
        padding-left:10px;
    }
    td:nth-of-type(8), td:nth-of-type(9){
        padding-right:10px;
    }
    span{
        display:block;
    }
    
    
`;

export const Button = styled.button`
    padding:13px ${props=> props.viewNotes ? "36px" : "16px"};
    border-radius:12px;
    border:none;
    font-size:1rem;
    font-weight:500;
    width:${props => props.viewNotes ? "auto" : "109px"};
    :hover{
      cursor:pointer;
    }
    ${(props)=>{
        if(props.refund)
        {
            return (
                `
                background-color:#FFEDEC;
                color:#E23428;
                `
            );
        }
        else if(props.booked){
            if(props.red){
                return (
                    `
                    background-color:#E23428 ;
                    color: #FFFFFF;
                    `
                ); 
            }
            return (
                `
                background-color:#E8FFEE;
                color: #5AD07A;
                `
            );
        }
        else if(props.pending){
            return (
                `
                background-color:#E2E2E2;
                color: #6D6D6D;
                `
            );
        }
        else if(props.canceled){
            return (
                `
                background-color:#575757;
                color: #BEBEBE;
                `
            );
        }
        else if(props.viewNotes){
            if(props.outlined)
            {
                return (
                    `
                    background-color:#FFF;
                    border: 1px solid #799283;
                    color: #799283;
                    `
                );
            }
            else{
                return (
                    `
                    color: #212121;
                    background-color:#EEF9F2;
                    `
                );
            }
        }
        else if(props.available){
            return ( 
                `
                color: #FFFFFF;
                background-color:#5AD07A;
                `
            );
        }
        else if(props.archive){
          return ( 
            `
            color: #E23428;
            background:transparent;
            `
        );
        }else if(props.phone){
          return ( 
            `
            border: 1px solid #E8F2EF;
            background:transparent;
            font-size:20px;
            width: 59px;
            height:50px;
            color:#135846;
            margin-right:16px;
            `
        );
        }
        else if(props.sendMessage){
          return ( 
            `
            color: #FFFFFF;
            background:#135846;
            height:50px;
            font-weight:600;
            width:auto;
            display:flex;
            align-items:center;
            gap:23px;
            svg{
              font-size:1.5rem;
            }
            `
        );
        }
    }}
`;
export const Input = styled.input`
    padding:13px 8px;
    border: 1px solid #135846;
    border-radius: 12px;
    color:#135846;
    font-weight:600;
    fonn-size:1rem;
    margin-right:10px;
    ::placeholder{
        color:#135846;  
    }
`;
export const TabMenu = styled.div`
    display:flex;
    span{
        border-bottom: 1px solid #D4D4D4;
        padding:26px clamp(20px, 1.4vw, 40px);
        font-weight:500;
        color:#6E6E6E;
        :first-child{
            color:#135846;
            border-bottom: 2px solid #135846;
        }
        :active, :hover{
            color:#135846;
            border-bottom: 2px solid #135846;
        }
        :hover{
            cursor:pointer;
        }
    }
`;
export const OrderBySelect = styled.select`
    padding:11px 8px;
    border: 1px solid #135846;
    border-radius: 12px;
    color:#135846;
    font-weight:600;
    font-size:1rem;
`;

export const Sidebar = styled.aside`
    width:17.96%;
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

export const UserCard = styled.div`
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
    ${props =>{
        if(props.w_70)
        {
            return `
                width:70px;
                height:70px;
            `;
        }
        else if(props.w_150){
            return `
                width:150px;
                height:77px;
            `;
        }
        else if(props.w_88){
            return `
                width:88px;
                height:88px;
            `;
        }
        else if(props.w_156){
          return `
              width:156px;
              height:156px;
          `;
      }
        else{
            return `
                width:57px;
                height:57px;
            `;
        }
    }}
    
    background: #C5C5C5;
    border-radius: 8px;
`;

export const ButtonGreen = styled.div`
    background: #EBF1EF 0% 0% no-repeat padding-box;
    border-radius: 8px;
    font: normal normal 600 14px/21px Poppins;
    letter-spacing: 0px;
    color: #135846;
    padding:14px 38px;
`;

export const UserName = styled.span`
    text-align: center;
    font-weight:500;
    letter-spacing: 0px;
    color: #393939;
`;

export const UserMail = styled.span`
    font-size:12px;
    letter-spacing: 0px;
    color: #B2B2B2;
`;
export const Footer = styled.div`
    font-size:12px;
    letter-spacing: 0px;
    color: #B2B2B2;
`;
export const FooterText = styled.p`
    font-size: 16px;
    font-weight:600;
    letter-spacing: 0px;
    color: #212121;
`;
export const CopyrightText = styled.p`
    font-size: 14px;
    font-weight:300;
    letter-spacing: 0px;
    color: #799283;
`;
export const KpiContainer = styled.div`
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
export const RecentBookingSchedule = styled.div`
  grid-row:2/5;
  grid-column: 1/3;
  text-align:center;
  a{
    color:#135846;
    font-weight:500;
    display:block;
    margin-top:10px;
  }
`;
export const RecentBooking = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 30px 14px 30px;
  .recent-booking {
    display: flex;
    gap: 21px;
    align-items: center;
    &--first{
      margin-top:20px;
    }
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
    background: #135846;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color:#FFF;
  }
`;
export const Calendar = styled.div`
  height: 400px;
`;
export const StatContainer = styled.div`
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
export const TotalStats = styled.div`
  padding: 29px 30px 35px 42px;
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
export const CustomerReviews = styled.div`
  grid-column: 1/5;
  padding: 30px 30px 70px 30px;
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
        color:#FFF;
    }
  }
  .customerReviews__card{
    box-shadow: 0px 16px 30px #00000014;
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
    color:#E23428;
    svg:first-child{
      color: #5AD07A;
    }
  }
  svg{
    font-size:1.5rem;
  }
  
`;
export const ReservationStats = styled.div`
  height: 400px;
  grid-column: 3/5;
`;
export const DashboardMain = styled.main`
  position: relative;
  left: 17.96%;
  width: 82.04%;
  box-sizing: border-box;
  background-color: #f8f8f8;
  padding: 40px 50px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 38px;
  .kpi-container {
  }
`;