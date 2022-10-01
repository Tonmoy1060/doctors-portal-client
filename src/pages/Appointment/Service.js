import React from "react";

const Service = ({service, setTreatment}) => {
   const {name, slots, price} = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
      <div className="card-body text-center">
        <h2 className="font-bold text-secondary text-xl">{name}</h2>
        <p >{slots.length > 0 ? slots[0]  : <p className="text-red-500">Try Another Day</p>}</p>
        <p className="text-sm">{slots.length} {slots.length > 1 ?  "slots" : "slot"} available</p>
        <p className="my-0 py-0"><small>Price: ${price}</small></p>
        <div className="card-actions justify-center">
          <label htmlFor="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} className="btn modal-button btn-sm btn-secondary text-white mt-3 font-semibold bg-gradient-to-r from-primary to-secondary">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;
