import styled, { css } from "styled-components";

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