import React from "react";
import {MdGppBad, MdOutlineGppGood} from 'react-icons/md';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { CustomerReviews, UserImage, TabMenu, Table, Button } from "../components/StyledComponents";
const Contact = () => {
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
      <TabMenu>
        <span>All Contacts</span>
        <span>Archived</span>
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