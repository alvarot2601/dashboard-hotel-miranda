import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
 import "swiper/css";
 import "swiper/css/navigation";
 import "swiper/css/bundle";
 import {AiOutlineArrowLeft} from 'react-icons/ai';
 // import required modules
 import { Navigation } from "swiper";
const RoomSlide = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="roomSlide">
            <SwiperSlide>
                <img
                    className="singleRoom__img"
                    src={require("../assets/images/room-1.jpg")}
                />
            
                <div className="singleRoom__img-info">
                    <span className="fw-600">Bed Room</span>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="singleRoom__img"
                    src={require("../assets/images/living-room.jpg")}
                />
                <div className="singleRoom__img-info">
                    <span className="fw-600">Living Room</span>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="singleRoom__img"
                    src={require("../assets/images/room-1.jpg")}
                />
                <div className="singleRoom__img-info">
                    <span className="fw-600">Bed Room</span>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="singleRoom__img"
                    src={require("../assets/images/room-1.jpg")}
                />
                <div className="singleRoom__img-info">
                    <span className="fw-600">Bed Room</span>
                    <p className="c-grey">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="singleRoom__img"
                    src={require("../assets/images/room-1.jpg")}
                />
                <div className="singleRoom__img-info">
                    <span className="fw-600">Bed Room</span>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="singleRoom__img"
                    src={require("../assets/images/room-1.jpg")}
                />
                <div className="singleRoom__img-info">
                    <span className="fw-600">Bed Room</span>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                    </p>
                </div>
            </SwiperSlide>
      </Swiper>
    );
}
export default RoomSlide;