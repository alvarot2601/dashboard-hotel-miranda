import React from "react";
import styled, { css } from 'styled-components'
import {SlOptionsVertical} from 'react-icons/sl';
import { TabMenu,OrderBySelect, Table, Input, UserImage } from "../components/StyledComponents";
const Bookings = () => {
    return (
        <main>
            <div className="tabMenu-container">
                <TabMenu>
                    <span>All Employee</span>
                    <span>Active Employee</span>
                    <span>Inactive Employee</span>
                    
                </TabMenu>
                <div>
                    <Input type="text" placeholder="Search by employee name" />
                    <OrderBySelect>
                        <option value="start_date">Start date</option>
                        <option value="name">Name</option>
                    </OrderBySelect>
                </div>
            </div>
            <Table className="target-component table">
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Employee Id</th>
                    <th>Email</th>
                    <th>Start Date</th>
                    <th>Description</th>
                    <th>Contact</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                <tr>
                    <td>
                        <UserImage w_88/>
                    </td>
                    <td>
                        <span className="fw-500">James Sitepu</span>
                    </td>
                    <td>
                        <span className="fw-500 s-14">#12341225</span>
                    </td>
                    <td>
                        <span className="fw-500">adfads@gmail.com</span>
                    </td>
                    <td>
                        <span className="fw-500">Joined on Aug 2th 2017</span>
                    </td>
                    <td>
                        <span>Description of the job</span>
                    </td>
                    <td>
                        <span className="fw-600 fs-14">635222555</span>
                    </td>
                    <td>
                    <span className="table__active fs-14 fw-600">Active</span>
                    </td>
                    <td>
                        <SlOptionsVertical/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <UserImage w_88/>
                    </td>
                    <td>
                        <span className="fw-500">James Sitepu</span>
                    </td>
                    <td>
                        <span className="fw-500 s-14">#12341225</span>
                    </td>
                    <td>
                        <span className="fw-500">adfads@gmail.com</span>
                    </td>
                    <td>
                        <span className="fw-500">Joined on Aug 2th 2017</span>
                    </td>
                    <td>
                        <span>Description of the job</span>
                    </td>
                    <td>
                        <span className="fw-600 fs-14">635222555</span>
                    </td>
                    <td>
                    <span className="table__inactive fs-14 fw-600">Inactive</span>
                    </td>
                    <td>
                        <SlOptionsVertical/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <UserImage w_88/>
                    </td>
                    <td>
                        <span className="fw-500">James Sitepu</span>
                    </td>
                    <td>
                        <span className="fw-500 s-14">#12341225</span>
                    </td>
                    <td>
                        <span className="fw-500">adfads@gmail.com</span>
                    </td>
                    <td>
                        <span className="fw-500">Joined on Aug 2th 2017</span>
                    </td>
                    <td>
                        <span>Description of the job</span>
                    </td>
                    <td>
                        <span className="fw-600 fs-14">635222555</span>
                    </td>
                    <td>
                        <span className="table__inactive fs-14 fw-600">Inactive</span>
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