import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import {
  TabMenu,
  Button,
  OrderBySelect,
} from "../components/StyledComponents";
import { UserImage } from "../components/StyledComponents";
import { SlOptionsVertical } from "react-icons/sl";
import rooms from '../json/rooms.json';
import { useState } from "react";
import Table from "../components/Table";

const Rooms = () => {
  const tabOptions = ['All Rooms', 'Available', 'Booked'];
  const [filter, setFilter] = useState(0);
  const [roomsData, setRoomsData] = useState(rooms);
  
  useEffect(() => {
    let data = rooms.filter(room =>{
      if(filter == 1){
        return room.status === 'Available'
      }else if(filter == 2){
        return room.status === 'Booked'
      }
      else{
        return room;
      }  
    })
    .map(room => room);
    setRoomsData(data);
  }, [filter]);

  const filterHandler = (e) => {
    let activeFilter = document.querySelector(".activeFilter");
    activeFilter.classList.remove("activeFilter");
    e.target.classList.add('activeFilter');
    setFilter(e.target.value);
  }
  return (
    <main>
      <div className="tabMenu-container">
        <TabMenu>
          {tabOptions.map((item, index) => <Button className={index==0 ? 'activeFilter': ''} value={index} onClick={filterHandler}>{item}</Button>)}
        </TabMenu>
        <OrderBySelect>
          <option value="guest">Guest</option>
          <option value="order_date">Order Date</option>
          <option value="check_in">Check In</option>
          <option value="check_out">Check Out</option>
        </OrderBySelect>
      </div>
      <Table headData={['Photo', 'Room Nº','Room Id', 'Room Type', 'Facilities', 'Rate', 'Offer price', 'Status']} tableData = {roomsData} tableType="rooms" />
    </main>
  );
};
export default Rooms;
