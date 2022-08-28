import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl text-center text-secondary">
        {" "}
        Available Services on {format(date, "PP")}
      </h1>
      <div className="grid grid-cols-3 gap-5 mt-20 pb-56">
        {services.map((service) => (
          <Service key={service._id} service={service} setTreatment={setTreatment}></Service>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
