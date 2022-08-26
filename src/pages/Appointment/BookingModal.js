import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />

      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">
            Booking For
            {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-col-1 gap-4 mt-10 justify-items-center"
            action=""
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              placeholder="Type here"
              class="input w-full input-bordered max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
            name="name"
              type="text"
              placeholder="Full Name"
              class="input w-full input-bordered max-w-xs"
            />
            <input
            name="number"
              type="text"
              placeholder="Phone Number"
              class="input w-full input-bordered max-w-xs"
            />
            <input
            name='email'
              type="text"
              placeholder="Email"
              class="input w-full input-bordered max-w-xs"
            />
            <input
              type="submit"
              placeholder="Type here"
              class="input text-white uppercase w-full input-bordered bg-secondary max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
