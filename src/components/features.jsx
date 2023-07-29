import React from "react";
import CalendarComponent from "./calendar";
import PageForm from "./form";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title"></div>
        <CalendarComponent />
        <PageForm />
      </div>
    </div>
  );
};
