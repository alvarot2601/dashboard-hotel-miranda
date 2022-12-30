import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import bookings from '../json/bookings.json';
import { useEffect } from "react";
import { Button } from "../components/styled components/Button";
import { OrderBySelect } from "../components/styled components/OrderBySelect";
import { TabMenu } from "../components/styled components/TabMenu";
import Table from "../components/Table";
const Bookings = () => {
  const tabOptions = ["All Bookings", "Pending", "Booked", "Canceled", "Refund"];
  const [filter, setFilter] = useState(0);
  const [bookingsData, setBookingsData] = useState(bookings)
  const [orderBy, setOrderBy] = useState(1);
  console.log(bookings[4].Guest[1])
  useEffect(() => {
    let data = bookings
    .sort((a,b)=>{
      if(orderBy==1){
        if (a.Guest[1].toLowerCase() <  b.Guest[1].toLowerCase()) return -1;
          else if (a.Guest[1].toLowerCase() > b.Guest[1].toLowerCase()) return 1;
          return 0;
      }
      else if(orderBy==2) return new Date(parseInt(a.Order_date)) - new Date(parseInt(b.Order_date));
      else if(orderBy==3) return new Date(parseInt(a['Check In'])) - new Date(parseInt(b['Check In']));
      else if(orderBy==4) return new Date(parseInt(a['Check Out'])) - new Date(parseInt(b['Check Out']));
    })
    .filter(booking =>{    
      if(filter == 1){
       return booking.status == 'Pending'
      }else if(filter == 2){
        return booking.status == 'Booked'
      }else if(filter == 3){
        return booking.status == 'Canceled'
      }
      else if(filter == 4){
        return booking.status == 'Refund'
      }
      else{
        return booking;
      }  
    })
    .map(booking => booking);
    setBookingsData(data);
  }, [filter, orderBy]);


  

  const filterHandler = (e) => {
    let activeFilter = document.querySelector(".activeFilter");
    activeFilter.classList.remove("activeFilter");
    e.target.classList.add("activeFilter");
    setFilter(e.target.value);
  };
  const orderByHandler = (e)=>{
    if(e.target.value==1) setOrderBy(1);
    else if(e.target.value==2) setOrderBy(2);
    else if(e.target.value==3) setOrderBy(3);
    else if(e.target.value==4) setOrderBy(4);
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
            
            <OrderBySelect onChange={orderByHandler}>
              <option value="1">Guest</option>
              <option value="2">Order Date</option>
              <option value="3">Check In</option>
              <option value="4">Check Out</option>
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
      </Table> 
      
      
      
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
    
  }*/
