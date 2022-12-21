import React, { useEffect } from "react";
import { OrderBySelect } from "../components/styled components/OrderBySelect";
import { TabMenu } from "../components/styled components/TabMenu";
import rooms from '../json/rooms.json';
import { useState } from "react";
import Table from "../components/Table";
import { Button } from "../components/styled components/Button";
const Rooms = () => {
  const tabOptions = ['All Rooms', 'Available', 'Booked'];
  const [filter, setFilter] = useState(0);
  const [roomsData, setRoomsData] = useState(rooms);
  const [orderBy, setOrderBy] = useState(1);
  useEffect(() => {
    let data = rooms.sort((a,b)=>{
      if(orderBy==1) return a.number - b.number;
      else if(orderBy==3) return a.rate - b.rate;
      else if(orderBy==4) return  b.rate - a.rate;
    })
    .filter(room =>{
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
  }, [filter, orderBy]);

  const filterHandler = (e) => {
    let activeFilter = document.querySelector(".activeFilter");
    activeFilter.classList.remove("activeFilter");
    e.target.classList.add('activeFilter');
    setFilter(e.target.value);
  }
  const orderByHandler = (e)=>{
    if(e.target.value==1){
      setOrderBy(1);
    }else if(e.target.value==3){
      setOrderBy(3);
    }
    else if(e.target.value==4){
      setOrderBy(4);
    }
  }
  return (
    <main>
      <div className="tabMenu-container">
        <TabMenu>
          {tabOptions.map((item, index) => <Button className={index==0 ? 'activeFilter': ''} value={index} onClick={filterHandler}>{item}</Button>)}
        </TabMenu>
        <OrderBySelect onChange={orderByHandler}>
          <option value="1">Room Number</option>
          <option value="3">Price (Asc)</option>
          <option value="4">Price (Desc)</option>
        </OrderBySelect>
      </div>
      <Table headData={['Photo', 'Room Nº','Room Id', 'Room Type', 'Facilities', 'Rate', 'Offer price', 'Status']} tableData = {roomsData} tableType="rooms" />
      
    </main>
  );
};
export default Rooms;
