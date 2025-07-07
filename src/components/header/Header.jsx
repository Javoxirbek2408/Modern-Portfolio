import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { ArrovTop } from "../../assets/icons/arrovTop";

export const Header = () => {
  return (
    <div className="mt-8">
      <div className="containerr flex flex-col items-center justify-center">
        <ul className=" nav p-5 rounded-[13px]  max-430 flex items-center justify-center gap-8 border-2 border-[#04071D]">
          <li>
            <NavLink
              className={
                "text-white font-medium text-sm leading-[110.00000000000001%] tracking"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "text-white font-medium text-sm leading-[110.00000000000001%] tracking"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "text-white font-medium text-sm leading-[110.00000000000001%] tracking"
              }
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "text-white font-medium text-sm leading-[110.00000000000001%] tracking"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="containerr">
          <h3 className="font-normal text-[15px] leading-[300%] tracking-[10%] text-center uppercase text-white mt-[64px]">
            Dynamic Web Magic with Next.js
          </h3>
          <h1 className="font-bold mt-5  text-5xl leading-[100%] tracking-[-1.6px] text-center align-middle ">
            Transforming Concepts into Seamless{" "}
            <span className="text-[#CBACF9]">User Experiences</span>
          </h1>
          <p className="flex items-center mt-6  flex-col justify-center font-normal text-base leading-[120%] tracking-[0%] text-center">
            <span> Hi! I’m Damirbek, a Frontend Engineer</span> based in
            Uzbekistan.
          </p>
        </div>
        <Button className="hedBtn !mt-[16px] containerr !h-[60px] !text-white !border-gray-500 ">
          See my work <ArrovTop />
        </Button>
      </div>
    </div>
  );
};
