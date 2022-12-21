import React, {useState} from "react";
import {MdGppBad, MdOutlineGppGood} from 'react-icons/md';
import {AiOutlineArrowRight} from 'react-icons/ai'; 
import { UserImage } from "../components/styled components/UserImage";
import {Table } from "../components/StyledComponents";
import { CustomerReviews } from "../components/styled components/CustomerReviews";
import { Button } from "../components/styled components/Button";
import { TabMenu } from "../components/styled components/TabMenu";

const Contact = () => {
    const tabOptions = ["All Contacts", "Archived"];
    const [filter, setFilter] = useState(0);
    const filterHandler = (e) => {
        let activeFilter = document.querySelector(".activeFilter");
        activeFilter.classList.remove("activeFilter");
        e.target.classList.add("activeFilter");
        setFilter(e.target.value);
      };
    return (
        <main>
        <CustomerReviews className="customerReviews target-component target-component--2">
        <p className="customerReviews__title">Latest Review by Customers</p>
        <div className="customerReviews__cardContainer">
            <div className="customerReviews__card">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam
                </p>
                <div className="customerReviews__row">
                    <div className="customerReviews__user">
                        <UserImage w_57></UserImage>
                        <div className="customerReviews__name">
                            <span>Kusnaidi Anderson</span>
                            <span>4m ago</span>
                        </div>
                    </div>
                    <div className="customerReviews__icons">
                        <MdOutlineGppGood/>
                        <MdGppBad />
                    </div>
                </div>
            </div>
            <div className="customerReviews__card">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam
                </p>
                <div className="customerReviews__row">
                    <div className="customerReviews__user">
                        <UserImage small></UserImage>
                        <div className="customerReviews__name">
                            <span>Kusnaidi Anderson</span>
                            <span>4m ago</span>
                        </div>
                    </div>
                    <div className="customerReviews__icons">
                        <MdOutlineGppGood/>
                        <MdGppBad />
                    </div>
                </div>
            </div>
            <div className="customerReviews__card">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam
                </p>
                <div className="customerReviews__row">
                    <div className="customerReviews__user">
                        <UserImage small></UserImage>
                        <div className="customerReviews__name">
                            <span>Kusnaidi Anderson</span>
                            <span>4m ago</span>
                        </div>
                    </div>
                    <div className="customerReviews__icons">
                        <MdOutlineGppGood/>
                        <MdGppBad />
                    </div>
                </div>
            </div>
            <div>
                <AiOutlineArrowRight className="arrow-icon"/>
            </div>
        </div>
      </CustomerReviews>
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
      <Table className="target-component">
        <tr>
            <th>Date</th>
            <th>Customer</th>
            <th>Comment</th>
            <th>Action</th>
        </tr>
        <tr>
            <td>
                <span>Nov 21th 2020 09:21 AM</span>
                <span>#12345678</span>
            </td>
            <td>
                <span>Nombre y apellidos</span>
                <span>email@gmail.com</span>
                <span>677543222</span>
            </td>
            <td>
                <span>Asunto</span>
                <p>
                    We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back
                </p>
            </td>
            <td>
                <Button archive>Archive</Button>
            </td>
        </tr>
      </Table>
    </main>
    );
}
export default Contact;