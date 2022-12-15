import React from "react";
import styled, { css } from 'styled-components'
import {SlOptionsVertical} from 'react-icons/sl';
import { TabMenu, Button,OrderBySelect, Table, UserImage } from "../components/StyledComponents";
const Bookings = () => {
    return (
        <main>
            <div className="tabMenu-container">
                <TabMenu>
                    <span>All Bookings</span>
                    <span>Check In</span>
                    <span>Check Out</span>
                    <span>In Progress</span>
                </TabMenu>
                <OrderBySelect>
                    <option value='guest'>Guest</option>
                    <option value='order_date'>Order Date</option>
                    <option value='check_in'>Check In</option>
                    <option value='check_out'>Check Out</option>
                </OrderBySelect>
            </div>
            <Table className="target-component table">
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
                        <UserImage/>
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
                        <Button viewNotes outlined>View Notes</Button>
                    </td>
                    <td>
                        <span className="fw-500">Deluxe A - 02</span>
                    </td>
                    <td>
                        <Button refund>Refund</Button>
                    </td>
                    <td>
                        <SlOptionsVertical/>
                    </td>
                </tr>
                <tr>
                    <td class="flex">
                        <UserImage/>
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
                        <SlOptionsVertical/>
                    </td>
                </tr>
                <tr>
                    <td class="flex">
                        <UserImage/>
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
                        <SlOptionsVertical/>
                    </td>
                </tr>
                <tr>
                    <td class="flex">
                        <UserImage/>
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
                        <SlOptionsVertical/>
                    </td>
                </tr> 
            </Table>
        </main>
    );
}
export default Bookings;