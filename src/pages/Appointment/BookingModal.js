import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const [user, loading, error] = useAuthState(auth);
  const { name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />

      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
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
              className="input w-full input-bordered max-w-xs"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              disabled
              value={user?.displayName || ''}
              className="input w-full input-bordered max-w-xs"
            />

            <input
              name="email"
              type="text"
              disabled
              value={user?.email || ''}
              className="input w-full input-bordered max-w-xs"
            />

            <input
              name="number"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered max-w-xs"
            />
            <input
              type="submit"
              placeholder="Type here"
              className="input text-white uppercase w-full input-bordered bg-secondary max-w-xs mb-5"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
