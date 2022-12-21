import React from "react";
import { MdGppBad, MdOutlineGppGood } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CustomerReviews } from "./styled components/CustomerReviews";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { UserImage } from "./styled components/UserImage";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import reviews from "../json/reviews.json";
const CustomerReview = () => {
  return (
    <CustomerReviews className="customerReviews target-component target-component--2">
      <p className="customerReviews__title">Latest Review by Customers</p>
      <div className="customerReviews__cardContainer">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        
        slidesPerGroup={3}
          navigation={true}
          modules={[Navigation]}
          className="reviewsSlide"
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide>
                <div className="customerReviews__card">
                  <p>
                    {review.review}
                  </p>
                  <div className="customerReviews__row">
                    <div className="customerReviews__user">
                      <UserImage w_57 src={review.photo}></UserImage>
                      <div className="customerReviews__name">
                        <span>{review.name}</span>
                        <span>4m ago</span>
                      </div>
                    </div>
                    <div className="customerReviews__icons">
                      <MdOutlineGppGood />
                      <MdGppBad />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div>
            <AiOutlineArrowRight className="arrow-icon" />
          </div>
        </Swiper>
      </div>
    </CustomerReviews>
  );
};
export default CustomerReview;
/*<div className="customerReviews__card">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
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
              <MdOutlineGppGood />
              <MdGppBad />
            </div>
          </div>
        </div>
        <div className="customerReviews__card">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
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
              <MdOutlineGppGood />
              <MdGppBad />
            </div>
          </div>
        </div>
        <div className="customerReviews__card">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
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
              <MdOutlineGppGood />
              <MdGppBad />
            </div>
          </div>
        </div> */
