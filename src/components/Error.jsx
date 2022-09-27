import React from "react";
import limit from "../assets/limit.png";

const Error = () => (
  <div className="w-full flex justify-center items-center">
    <h1 className="font-bold text-2xl text-white text-center mt-2">
      Something Went Wrong Please Try Again.
      <span className="font-normal mt-3 block">
        If You Keep Seeing This Message Then I'm So Sorry This Is Because I'm
        using a Free Api That Only Allows Me To Send 500 Api Calls a Month.
      </span>
      <div className="flex mt-5 justify-center shadow-slate-700 shadow-2xl">
        <img src={limit} alt="" />
      </div>
    </h1>
  </div>
);

export default Error;
