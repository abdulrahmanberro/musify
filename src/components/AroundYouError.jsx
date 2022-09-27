import React from "react";
import Example from "../assets/example.png";

const AroundYouError = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <h1 className="font-bold text-2xl text-white text-center mt-2">
        <span className="font-extralight block">
          Something Went Wrong. Please Try Again.
        </span>
        If This Takes Too Long Then This Might Be An Error Caused by The Country
        Detection Api That I'm Using Since It Only Accepts 1000 Api Calls Per
        LifeTime.
        <span className=" mt-10 font-extralight block">
          Here's an Example Of How It Works...
        </span>
        <div className="flex mt-5 justify-center shadow-slate-700 shadow-2xl">
          <img src={Example} alt="" />
        </div>
      </h1>
    </div>
  );
};

export default AroundYouError;
