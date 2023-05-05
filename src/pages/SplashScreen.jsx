import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import step1pic from "../images/step1pic.png";
import step2pic from "../images/step2pic.png";
import step3pic from "../images/step3pic.png";
import step4pic from "../images/step4pic.png";
import step5pic from "../images/step5pic.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay } from "swiper";

const SplashScreen = () => {
  // function to trigger swiping

  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const handleGetStarted = () => {
    alert("Get started");
  };

  const steps = [
    {
      title: "Welcome to uamuzi",
      description: "Governance and peacebuilding platform ",
      image: step1pic,
      buttonName: "Next",
    },
    {
      title: "Get updates from leaders",
      description: "Like and comment on posts from your representatives",
      image: step2pic,
      buttonName: "Next",
    },
    {
      title: "Engage with constituents",
      description: "Converse on current issues at every level of governance",
      image: step3pic,
      buttonName: "Next",
    },
    {
      title: "Report on incidents",
      description: "Report incidents to your representatives",
      image: step4pic,
      buttonName: "Next",
    },
    {
      title: "Chat with friends",
      description: "Enjoy peer-to-peer connection",
      image: step5pic,
      buttonName: "Get Started",
    },
  ];
  return (
    <div className=" w-[90%]  mx-auto h-screen">
      <p className="text-end cursor-pointer  p-4 " onClick={handleGetStarted}>
        Skip
      </p>
      <div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="flex justify-center py-8 items-center swiper-container"
        >
          {steps.map((step) => (
            <SwiperSlide
              key={step.title}
              className="flex items-center justify-center h-[100vh]"
            >
              <div className="flex flex-col    items-center justify-center gap-12">
                <img src={step.image} alt="step" />
                <h1 className="text-2xl font-bold">{step.title}</h1>
                <p className="text-center text-[#333333] text-[14px] leading-[24px]">{step.description}</p>
                <button
                  onClick={
                    step.buttonName === "Get Started" ? handleGetStarted : swipe
                  }
                  className="bg-[#8067AD] flex justify-center h-[40px] items-center  text-white w-[296px] p-4 mx-auto rounded-md mt-4"
                  style={{
                    boxShadow: "0px 8px 16px rgba(128, 103, 173, 0.65)",
                    borderRadius: "29px",
                  }}
                >
                  {step.buttonName}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SplashScreen;
