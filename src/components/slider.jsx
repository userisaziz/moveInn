import React from "react";
import Slider from "react-slick";

const SliderComponent = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
    nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
    responsive: [
      // Responsive settings here
    ],
  };

  return (
    <section id="properties">
      <div className="container">
        <h2>Properties</h2>
        <Slider {...settings}>
          <div>{/* Property 1 content goes here */}</div>
          <div>{/* Property 2 content goes here */}</div>
          {/* Add more properties here */}
        </Slider>
        <button className="rounded">View All Property Listings</button>
      </div>
    </section>
  );
};

export default SliderComponent;
