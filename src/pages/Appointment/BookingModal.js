import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "react-toastify/dist/ReactToastify.css";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots, price } = treatment;

  const formatedDate = format(date, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);

    const booking = {
      treatmentId: _id,
      treatment: name,
      slot,
      price,
      date: formatedDate,
      patient: user.email,
      phone: e.target.number.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if(data.success){
          toast(`Confirmed treatment ${name} on ${formatedDate}, at ${slot}`)
        }
        else{
          toast.error(` already added ${data.booking?.treatment} on ${data.booking?.date}`)
        }
        refetch()
      });
      
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
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              disabled
              value={user?.displayName || ""}
              className="input w-full input-bordered max-w-xs"
            />

            <input
              name="email"
              type="text"
              disabled
              value={user?.email || ""}
              className="input w-full input-bordered max-w-xs"
            />

            <input
              name="number"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered max-w-xs"
              required
            />
            <input
              type="submit"
              value="Booking"
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
