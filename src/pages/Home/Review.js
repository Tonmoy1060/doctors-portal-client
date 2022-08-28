import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg shadow-xl">
      <div className="card-body">
        <p className="text-base">{review.comment}</p>
        <div className="flex pt-7">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="" src={review.img} />
            </div>
          </div>
          <div className="pl-3.5">
            <h1 className="text-xl">{review.name}</h1>
            <h4 className="text-base">{review.location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
