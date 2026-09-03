import React from "react";
import Dynamics from "../src/Dynamics";
import Button from "../src/Button";

export const Form = ({ text }) => {
  return (
    <>
      <form action="" className="flex flex-col gap-4 ">
        <div>
          <h2 className="font-bold text-4xl ">{text}</h2>
        </div>
        <div className="flex flex-col gap-2 ">
          {text === "Register" && (
            <>
              <Dynamics placeholderName={"UserName"} />
              <Dynamics placeholderName={"Address"} />
              <Dynamics placeholderName={"Phone"} type="Number" />
              <Dynamics placeholderName={"Country"} />
            </>
          )}
          <Dynamics placeholderName={"Email"} />
          <Dynamics placeholderName={"Password"} type="Password" />
        </div>
        <div className="ml-auto">
          <Button ButtonName={text} />
        </div>
      </form>
    </>
  );
};
export default Form;
