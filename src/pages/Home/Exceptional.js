import React from "react";
import exceptional from '../../assets/images/treatment.png'
import Button from "../shared/Button";

const Exceptional = () => {
  return (
    <div className="hero min-h-screen mb-28">
      <div className="hero-content flex-col lg:flex-row lg:w-10/12 lg:mx-auto">
        <img
          src={exceptional}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="lg:pl-28">
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
