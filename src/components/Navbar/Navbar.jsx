import React from "react";
import Button from "../Button/Button";
import "./navbar.scss";
import resumePdf from "/documents/Dhanush_resume.pdf";

const Navbar = () => {
  const handleClick = (data) => {
    console.log("clicked");
  };
  return (
    <>
      <div className="main_navbar_container">
        <div className="icon">
        </div>
        <div className="button-container">
          <Button
            onClick={handleClick}
            customClassName=" bg-amber-400 text-lg font-bold text-[#F9F7E5]"
            name="Contact"
          />
          <Button customClassName=" text-lg font-bold border-2 border-amber-400 border-solid text-amber-500">
            <a
              className=" w-full h-full text-amber-500"
              href={resumePdf}
              download="Dhanush_resume"
            >
              Resume
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
