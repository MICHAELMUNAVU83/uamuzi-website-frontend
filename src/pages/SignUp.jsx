import React from "react";
import signupfinal from "../images/signupfinal.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import back from "../images/back.png";

import { Pagination, Scrollbar } from "swiper";

const SignUp = () => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const swipeBack = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };
  const sigUpOne = (
    <div className="flex flex-col  h-screen">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <input
        className="border-b-2 my-4  w-[296px] focus:outline-none border-[#969696]"
        type="text"
        placeholder="Firstname  "
      />
      <input
        className="border-b-2 my-4 w-[296px] focus:outline-none border-[#969696]"
        type="text"
        placeholder="Lastname  "
      />
      <input
        className="border-b-2 my-4 w-[296px] focus:outline-none border-[#969696]"
        type="text"
        placeholder="Uamuzi id  "
      />
      <input
        className="border-b-2 my-4 w-[296px] focus:outline-none border-[#969696]"
        type="text"
        placeholder="password  "
      />

      <input
        className="border-b-2 my-4 w-[296px] focus:outline-none border-[#969696]"
        type="text"
        placeholder="Confirm password  "
      />
      <div className="flex w-[296px] items-center gap-2">
        <input type="checkbox" />

        <p>
          By signing up, you agree to our
          <span className="text-[#8067AD] cursor-pointer">
            Terms & Conditions and our Privacy Policy
          </span>
        </p>
      </div>
      <button
        className="bg-[#8067AD] my-4 flex justify-center h-[40px] items-center  text-white w-[296px] p-4 mx-auto rounded-md mt-4"
        style={{
          boxShadow: "0px 8px 16px rgba(128, 103, 173, 0.65)",
          borderRadius: "29px",
        }}
        onClick={swipe}
      >
        I agree
      </button>

      <p className="text-center my-4">
        Already have an account?
        <span className="text-[#8067AD] cursor-pointer"> Log In</span>
      </p>
    </div>
  );

  const signUpTwo = (
    <div className="flex flex-col">
      <div className="flex mb-8 justify-start">
        <img
          src={back}
          className="h-[19.95px] w-[11.48px]"
          onClick={swipeBack}
        />
      </div>
      <h1 className="text-3xl font-bold">Sign Up </h1>
      <input
        className="border-b-2 w-[296px] my-4 focus:outline-none border-[#969696]"
        type="text"
        placeholder="Email address  "
      />
      <input
        className="border-b-2 w-[296px] my-4 focus:outline-none border-[#969696]"
        type="text"
        placeholder="Mobile number  "
      />

      <button
        className="bg-[#8067AD] flex justify-center my-4 h-[40px] items-center  text-white w-[296px] p-4 mx-auto rounded-md mt-4"
        style={{
          boxShadow: "0px 8px 16px rgba(128, 103, 173, 0.65)",
          borderRadius: "29px",
        }}
        onClick={swipe}
      >
        I agree
      </button>
    </div>
  );

  const signUpThree = (
    <div className="flex flex-col ">
      <div className="flex mb-8 justify-start">
        <img
          src={back}
          className="h-[19.95px] w-[11.48px]"
          onClick={swipeBack}
        />
      </div>
      <h1 className="text-2xl font-bold">Sign Up </h1>
      <select className="border-b-2 my-4 w-[296px] text-[#969696] focus:outline-none border-[#969696]">
        <option value="">Select your Country</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
      <select className="border-b-2 w-[296px] my-4  text-[#969696] focus:outline-none border-[#969696]">
        <option value="">Select your County</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
      <select className="border-b-2 w-[296px] my-4  text-[#969696] focus:outline-none border-[#969696]">
        <option value="">Select your Constituency</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>

      <select className="border-b-2 w-[296px] my-4 text-[#969696] focus:outline-none border-[#969696]">
        <option value="">Select your Ward</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>

      <button
        className="bg-[#8067AD] my-4 flex justify-center h-[40px] items-center  text-white w-[296px] p-4 mx-auto rounded-md mt-4"
        style={{
          boxShadow: "0px 8px 16px rgba(128, 103, 173, 0.65)",
          borderRadius: "29px",
        }}
        onClick={swipe}
      >
        I agree
      </button>

      <p className="text-center justify-center gap-1 flex">
        Already have an account?
        <span className="text-[#8067AD] cursor-pointer">Log In</span>
      </p>
    </div>
  );

  const signUpFour = (
    <div className="flex justify-center  flex-col w-[296px] ">
      <img src={signupfinal} className="h-[230px] w-[290px]" />
      <p className="text-center">Congratulations!</p>
      <p className="text-center">
        Welcome to the Uamuzi family! You can now log in to your account.
      </p>
      <button
        className="bg-[#8067AD] flex justify-center h-[40px] items-center  text-white w-[296px] p-4 mx-auto rounded-md mt-4"
        style={{
          boxShadow: "0px 8px 16px rgba(128, 103, 173, 0.65)",
          borderRadius: "29px",
        }}
      >
        Login
      </button>
    </div>
  );
  return (
    <div>
      <Swiper
        loop={false}
        scrollbar={{
          draggable: true,
          hide: false,
        }}
        modules={[Pagination, Scrollbar]}
        className="flex justify-center py-8 items-center swiper-container"
      >
        <SwiperSlide className="flex  justify-center h-screen">
          {sigUpOne}
        </SwiperSlide>
        <SwiperSlide className="flex  justify-center h-screen">
          {signUpTwo}
        </SwiperSlide>
        <SwiperSlide className="flex  justify-center h-screen">
          {signUpThree}
        </SwiperSlide>

        <SwiperSlide className="flex items-center  justify-center h-screen">
          {signUpFour}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SignUp;
