import React from "react";
import Button from "../shared/Button";

const Service = ({ service }) => {
  return (
    <div class="card lg:max-w-max bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={service.img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
