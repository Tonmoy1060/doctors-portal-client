import React from "react";

const Service = ({service, setTreatment}) => {
   const {name, slots} = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl ">
      <div class="card-body text-center">
        <h2 class="font-semibold text-secondary text-xl">{name}</h2>
        <p >{slots.length > 0 ? slots[0]  : <p className="text-red-500">Try Another Day</p>}</p>
        <p className="text-sm">{slots.length} {slots.length > 1 ?  "slots" : "slot"} available</p>
        <div class="card-actions justify-center">
          <label for="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} class="btn modal-button btn-secondary text-white mt-11">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
