import React from "react";
import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import users from "../json/users.json";
import { Button } from "../components/StyledComponents";
import Table from "../components/Table";
import {
  TabMenu,
  OrderBySelect,
  Input,
  UserImage,
} from "../components/StyledComponents";
const Bookings = () => {
  const tabOptions = ["All Employee", "Active Employee", "Inactive Employee"];
  const [filter, setFilter] = useState(0);
  const [usersData, setUsersData] = useState(users);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("start_date");
  console.log(orderBy);
  useEffect(() => {
    let orderByCategory = orderBy;
    let data = users
      .sort((a, b) => {
        if (orderByCategory === "start_date")
          return new Date(b.start_date) - new Date(a.start_date);
        else {
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          return 0;
        }
      })
      .filter((user) => {
        if (filter == 1) {
          return (
            user.status === "Active" &&
            user.name.toLocaleLowerCase().search(searchTerm) !== -1
          );
        } else if (filter == 2) {
          return (
            user.status === "Inactive" &&
            user.name.toLocaleLowerCase().search(searchTerm) !== -1
          );
        } else {
          return user.name.toLocaleLowerCase().search(searchTerm) !== -1;
        }
      })
      .map((user) => user);
    setUsersData(data);
  }, [filter, searchTerm, orderBy]);

  //HANDLERSSSSSS
  const searchByNameHandler = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const filterHandler = (e) => {
    let activeFilter = document.querySelector(".activeFilter");
    activeFilter.classList.remove("activeFilter");
    e.target.classList.add("activeFilter");
    setFilter(e.target.value);
  };
  const orderByHandler = (e) => {
    setOrderBy(e.target.value);
  };
  return (
    <main>
      <div className="tabMenu-container">
        <TabMenu>
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
          <Input
            type="text"
            onChange={searchByNameHandler}
            placeholder="Search by employee name"
          />
          <OrderBySelect onChange={orderByHandler}>
            <option value="start_date">Start Date</option>
            <option value="name">Name</option>
          </OrderBySelect>
        </div>
      </div>
      <Table
        headData={[
          "Photo",
          "Name",
          "Employee Id",
          "Email",
          "Start Date",
          "Description",
          "Contact",
          "Status",
        ]}
        tableData={usersData}
        tableType="users"
      />
    </main>
  );
};
export default Bookings;
/*<Table className="target-component table">
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
            </Table> */
