import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { transparent } from "daisyui/src/colors";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LlQ8LBTYHW7nDDYaIITG38oAITpX18UwzieUnNDylWbcd7FSssinwBSjCxoUlDmcw03KsD16GX9smYQK9pVqKe800D2yjvHli"
);

const Payment = () => {
  const { id } = useParams();
  const {
    data: appointment,
    isLoading,
    refetch,
  } = useQuery("booking", () =>
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment}/>
              </Elements>
            </div>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
                <p className="text-accent">
                  Hello,{" "}
                  <span class={"text-primary font-semibold"}>
                    {appointment.patient}
                  </span>
                </p>
                <h2 class="card-title">
                  Pay for:{" "}
                  <h2 className="text-success">{appointment.treatment}</h2>
                </h2>
                <p className="text-xs font-semibold">
                  {" "}
                  Your Appointment:{" "}
                  <span className="text-orange-600">
                    {appointment.date} at {appointment.slot}
                  </span>
                </p>
                <p className="font-bold">
                  Please Pay For: ${appointment.price}
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
