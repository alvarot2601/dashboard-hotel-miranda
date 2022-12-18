import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import bookings from '../json/bookings.json';
import { useEffect } from "react";
import {
  TabMenu,
  Button,
  OrderBySelect,
  UserImage,
} from "../components/StyledComponents";
import Table from "../components/Table";
const Bookings = () => {
  const tabOptions = ["All Bookings", "Check In", "Check Out", "In Progress"];
  const [filter, setFilter] = useState(0);
  const [bookingsData, setBookingsData] = useState(bookings)
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  useEffect(() => {
    let data = bookings.filter(room =>{
        
      if(filter == 1){
        const check_in = new Date(checkInDate);
        const check_out = new Date(checkOutDate);
        return room['Check In'] >=check_in.getTime()  && room['Check In'] <= check_out.getTime();
      }else if(filter == 2){
        const check_in = new Date(checkInDate);
        const check_out = new Date(checkOutDate);
        return room['Check Out'] >=check_in.getTime()  && room['Check Out'] <= check_out.getTime();
      }else if(filter == 3){
        const check_in = new Date(checkInDate);
        const check_out = new Date(checkOutDate);
        return (room['Check In'] >=check_in.getTime() && room['Check In'] < check_out.geTime())  && (room['Check Out'] <= check_out.getTime());
      }
      else{
        return room;
      }  
    })
    .map(room => room);
    setBookingsData(data);
  }, [filter]);


  

  const filterHandler = (e) => {
    let activeFilter = document.querySelector(".activeFilter");
    activeFilter.classList.remove("activeFilter");
    e.target.classList.add("activeFilter");
    setFilter(e.target.value);
  };
  const changeInputTypeHandler = (e) => {
    let checkIn = true;
    let check_date;
    if(e.target.id == 'check_in'){
        check_date = document.querySelector("#check_in");
    }
    else{
        check_date = document.querySelector("#check_out");
        checkIn = false;
    }
    if(check_date.type == 'text'){
        check_date.type = 'date';
        if(checkIn === true){
            check_date.value = checkInDate;
        }
        else{
            check_date.value = checkOutDate;
        }
        check_date.readOnly = false;
    }
    else{
        if(check_date.value!==''){
            check_date.type = 'text';
            check_date.readOnly = true;
            const date = checkIn ? new Date(checkInDate) : new Date(checkOutDate)
            
            check_date.value = date.getDate() + " " +  date.toLocaleDateString('en-US',{
                month:'long'
            }) + " " + date.getFullYear();
        }  
    }
  }
  const changeDateHandler = (e) => {
    
    if(e.target.id === 'check_in')
    {
        const check_in = document.querySelector("#check_in");
        const check_in_date = new Date(check_in.value);
        if(check_in.type==='date'){
            setCheckInDate(check_in.value)
        }
    }
    else{
        const check_out = document.querySelector("#check_out");
        const check_out_date = new Date(check_out.value);
        if(check_out.type==='date'){
            setCheckOutDate(check_out.value)
        }
    }
    
  }
  
  return (
    <main>
      <div className="tabMenu-container">
        <TabMenu tabOptions={tabOptions}>
          {tabOptions.map((item, index) => (
            <Button
              className={index == 0 ? "activeFilter" : ""}
              value={index}
              onClick={filterHandler}
            >
              {item}
            </Button>
          ))}
        </TabMenu>
        <div>
            <input type="date" id="check_in" placeholder="dd-mm-yyyy" onFocus={changeInputTypeHandler} onChange={changeDateHandler}/>
            <input type="date" id="check_out" placeholder="dd-mm-yyyy" onFocus={changeInputTypeHandler} onChange={changeDateHandler}/>
            <OrderBySelect>
            <option value="guest">Guest</option>
            <option value="order_date">Order Date</option>
            <option value="check_in">Check In</option>
            <option value="check_out">Check Out</option>
            </OrderBySelect>
        </div>
      </div>
      <Table headData = {['Guest', 'Order Date', 'Check In' , 'Check Out', 'Special Request', 'Room Type', 'Status' ]} tableData = {bookingsData} tableType="bookings" />
      
    </main>
  );
};
export default Bookings;
/**<Table className="target-component table">
        <tr>
          <th>Guest</th>
          <th>Order Date</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Special Request</th>
          <th>Room Type</th>
          <th>Status</th>
          <th></th>
        </tr>

        <tr>
          <td class="flex">
            <UserImage />
            <div>
              <span className="fw-500">Cahiadi Purmomo</span>
              <span className="fs-14 table__bookingId">#000123456</span>
            </div>
          </td>
          <td>
            <span>Oct 30th 2020 09:21 AM</span>
          </td>
          <td>
            <span className="fw-500">Nov 2th, 2020</span>
            <span className="fs-14">9.46 PM</span>
          </td>
          <td>
            <span className="fw-500">Nov 2th, 2020</span>
            <span className="fs-14">9.46 PM</span>
          </td>
          <td>
            <Button viewNotes outlined>
              View Notes
            </Button>
          </td>
          <td>
            <span className="fw-500">Deluxe A - 02</span>
          </td>
          <td>
            <Button refund>Refund</Button>
          </td>
          <td>
            <SlOptionsVertical />
          </td>
        </tr>
        <tr>
          <td class="flex">
            <UserImage />
            <div>
              <span className="fw-500">Cahiadi Purmomo</span>
              <span className="fs-14 table__bookingId">#000123456</span>
            </div>
          </td>
          <td>
            <span>Oct 30th 2020 09:21 AM</span>
          </td>
          <td>
            <span className="fw-500">Nov 2th, 2020</span>
            <span className="fs-14">9.46 PM</span>
          </td>
          <td>
            <span className="fw-500">Nov 2th, 2020</span>
            <span className="fs-14">9.46 PM</span>
          </td>
          <td>
            <Button viewNotes>View Notes</Button>
          </td>
          <td>
            <span className="fw-500">Deluxe A - 02</span>
          </td>
          <td>
            <Button booked>Booked</Button>
          </td>
          <td>
            <SlOptionsVertical />
          </td>
        </tr>
        <tr>
          <td class="flex">
            <UserImage />
            <div>
              <span className="fw-500">Cahiadi Purmomo</span>
              <span className="fs-14 table__bookingId">#000123456</span>
            </div>
          </td>
          <td>
            <span>Oct 30th 2020 09:21 AM</span>
          </td>
          <td>
            <span className="fw-500">Nov 2th, 2020</span>
            <span className="fs-14">9.46 PM</span>
          </td>
          <td>
            <span className="fw-500">Nov 2th, 2020</span>
            <span className="fs-14">9.46 PM</span>
          </td>
          <td>
            <Button viewNotes>View Notes</Button>
          </td>
          <td>
            <span className="fw-500">Deluxe A - 02</span>
          </td>
          <td>
            <Button booked>Booked</Button>
          </td>
          <td>
            <SlOptionsVertical />
          </td>
        </tr>
        <tr>
          <td class="flex">
            <UserImage />
            <div>
              <span className="fw-500">Cahiadi Purmomo</span>
              <span className="fs-14 table__bookingId">#000123456</span>
            </div>
          </td>
          <td>
            <span>Oct 30th 2020 09:21 AM</span>
          </td>
          <td>
            <span className="fw-500">Nov 2th, 2020</span>
            <span className="fs-14">9.46 PM</span>
          </td>
          <td>
            <span className="fw-500">Nov 2th, 2020</span>
            <span className="fs-14">9.46 PM</span>
          </td>
          <td>
            <Button viewNotes>View Notes</Button>
          </td>
          <td>
            <span className="fw-500">Deluxe A - 02</span>
          </td>
          <td>
            <Button booked>Booked</Button>
          </td>
          <td>
            <SlOptionsVertical />
          </td>
        </tr>
      </Table> */
