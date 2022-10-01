import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { pl } from "date-fns/locale";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ appointment }) => {
  const [cardError, setCardError] = useState(" ");
  const [success, setSuccess] = useState(" ");
  const [processing, setProcessing] = useState(false);
  const [transaction, setTransaction] = useState(" ");
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const { _id, price, patient } = appointment;

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || " ");
    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setTransaction(paymentIntent?.id)
      setSuccess("Good paymentn Done!");
      //
      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id
      }
      fetch(`http://localhost:5000/booking/${_id}`, {
            method: 'PATCH',
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
          })
      .then(res => res.json())
      .then(data => {
        setProcessing(false);
        console.log(data);      
      })
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && <div className="text-green-500">
        <p>{success}</p>
        <p className="text-success">Your transaction Id: {transaction}</p>
        </div>}
    </>
  );
};

export default CheckoutForm;
