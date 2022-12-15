import React from "react";
import styled, { css } from "styled-components";
import {
  TabMenu,
  Button,
  OrderBySelect,
  Table,
} from "../components/StyledComponents";
import { UserImage } from "../components/StyledComponents";
import { SlOptionsVertical } from "react-icons/sl";
const Rooms = () => {
  return (
    <main>
      <div className="tabMenu-container">
        <TabMenu>
          <span>All Guests</span>
          <span>Pending</span>
          <span>Booked</span>
          <span>Canceled</span>
          <span>Refund</span>
        </TabMenu>
        <OrderBySelect>
          <option value="guest">Guest</option>
          <option value="order_date">Order Date</option>
          <option value="check_in">Check In</option>
          <option value="check_out">Check Out</option>
        </OrderBySelect>
      </div>
      <Table className="target-component table">
        <tr>
          <th>Photo</th>
          <th>Room Nº</th>
          <th>Room Id</th>
          <th>Room Type</th>
          <th>Amenities</th>
          <th>Price</th>
          <th>Offer price</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tr>
            <td>
                <UserImage w_150/>
            </td>
          <td>
            <span className="fw-500 table__roomNumber">#000123456</span>              
          </td>
          <td>
            <span className="fw-500">Deluxe A-91234</span>
          </td>
          <td>
            <span className="fw-500">Double Bed</span>
          </td>
          <td>
            <span className="fw-500">Floor A-1</span>
          </td>
          <td>
            <span>
              AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi
            </span>
          </td>
          <td>
            <span>
              <span className="fw-600 table__inline">$145</span> <span className="table__inline fs-14 c-green">/night</span>
            </span>
          </td>
          <td>
            <Button available>Available</Button>
          </td>
          <td>
            <SlOptionsVertical />
          </td>
        </tr>
        <tr>
            <td>
                <UserImage w_150/>
            </td>
          <td>
            <span className="fw-500 table__roomNumber">#000123456</span>              
          </td>
          <td>
            <span className="fw-500">Deluxe A-91234</span>
          </td>
          <td>
            <span className="fw-500">Double Bed</span>
          </td>
          <td>
            <span className="fw-500">Floor A-1</span>
          </td>
          <td>
            <span>
              AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi
            </span>
          </td>
          <td>
            <span>
              <span className="fw-600 table__inline">$145</span> <span className="table__inline fs-14 c-green">/night</span>
            </span>
          </td>
          <td>
            <Button available>Available</Button>
          </td>
          <td>
            <SlOptionsVertical />
          </td>
        </tr>
        <tr>
            <td>
                <UserImage w_150/>
            </td>
          <td>
            <span className="fw-500 table__roomNumber">#000123456</span>              
          </td>
          <td>
            <span className="fw-500">Deluxe A-91234</span>
          </td>
          <td>
            <span className="fw-500">Double Bed</span>
          </td>
          <td>
            <span className="fw-500">Floor A-1</span>
          </td>
          <td>
            <span>
              AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi
            </span>
          </td>
          <td>
            <span>
              <span className="fw-600 table__inline">$145</span> <span className="table__inline fs-14 c-green">/night</span>
            </span>
          </td>
          <td>
            <Button available>Available</Button>
          </td>
          <td>
            <SlOptionsVertical />
          </td>
        </tr>
        <tr>
            <td>
                <UserImage w_150/>
            </td>
          <td>
            <span className="fw-500 table__roomNumber">#000123456</span>              
          </td>
          <td>
            <span className="fw-500">Deluxe A-91234</span>
          </td>
          <td>
            <span className="fw-500">Double Bed</span>
          </td>
          <td>
            <span className="fw-500">Floor A-1</span>
          </td>
          <td>
            <span>
              AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi
            </span>
          </td>
          <td>
            <span>
              <span className="fw-600 table__inline">$145</span> <span className="table__inline fs-14 c-green">/night</span>
            </span>
          </td>
          <td>
            <Button available>Available</Button>
          </td>
          <td>
            <SlOptionsVertical />
          </td>
        </tr>
        <tr>
            <td>
                <UserImage w_150/>
            </td>
          <td>
            <span className="fw-500 table__roomNumber">#000123456</span>              
          </td>
          <td>
            <span className="fw-500">Deluxe A-91234</span>
          </td>
          <td>
            <span className="fw-500">Double Bed</span>
          </td>
          <td>
            <span className="fw-500">Floor A-1</span>
          </td>
          <td>
            <span>
              AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi
            </span>
          </td>
          <td>
            <span>
              <span className="fw-600 table__inline">$145</span> <span className="table__inline fs-14 c-green">/night</span>
            </span>
          </td>
          <td>
            <Button booked red>Booked</Button>
          </td>
          <td>
            <SlOptionsVertical />
          </td>
        </tr>
      </Table>
    </main>
  );
};
export default Rooms;
