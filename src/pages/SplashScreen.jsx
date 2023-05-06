import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import step1pic from "../images/step1pic.png";
import step2pic from "../images/step2pic.png";
import step3pic from "../images/step3pic.png";
import step4pic from "../images/step4pic.png";
import step5pic from "../images/step5pic.png";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const SplashScreen = () => {
  // function to trigger swiping

  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
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
    <div className=" w-[90%]  mx-auto ">
      <div className="flex justify-end">
        <Link to="/signup" className="text-end cursor-pointer  p-4 ">
          Skip
        </Link>
      </div>
      <div>
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="flex justify-center py-8 items-center swiper-container"
        >
          {steps.map((step) => (
            <SwiperSlide
              key={step.title}
              className="flex items-center justify-center "
            >
              <div className="flex flex-col    items-center justify-center gap-12">
                <img src={step.image} alt="step" />
                <h1 className="text-2xl font-bold">{step.title}</h1>
                <p className="text-center text-[#333333] text-[14px] leading-[24px]">
                  {step.description}
                </p>
                {step.buttonName === "Next" && (
                  <button
                    onClick={swipe}
                    className="bg-[#8067AD] flex justify-center h-[40px] items-center  text-white w-[296px] p-4 mx-auto rounded-md mt-4"
                    style={{
                      boxShadow: "0px 8px 16px rgba(128, 103, 173, 0.65)",
                      borderRadius: "29px",
                    }}
                  >
                    {step.buttonName}
                  </button>
                )}
                {step.buttonName === "Get Started" && (
                  <Link
                    to="/signup"
                    className="bg-[#8067AD] flex justify-center h-[40px] items-center  text-white w-[296px] p-4 mx-auto rounded-md mt-4"
                    style={{
                      boxShadow: "0px 8px 16px rgba(128, 103, 173, 0.65)",
                      borderRadius: "29px",
                    }}
                  >
                    {step.buttonName}
                  </Link>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SplashScreen;
