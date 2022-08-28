import React from "react";
import background from "../../assets/images/appointment.png";

const ContactForm = () => {
  return (
    <div
      className="mt-28 text-center"
      style={{ background: `url(${background})` }}
    >
      <div className="text-white  w-3/4 mx-auto py-14">
        <div >
          <h1 className="text-secondary font-semibold text-xl">Contact Us</h1>
          <h1 className="text-3xl">Stay Connected With Us</h1>
        </div>
        <form className="text-black mt-8 " action="">
          <input
            type="text"
            placeholder="Email Address"
            className="input  input-sm w-full py-4 max-w-sm"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input input-sm w-full my-5 py-4 max-w-sm"
          />
          <br />
          <textarea
            className="textarea  w-full max-w-sm"
            placeholder="Your message"
          ></textarea>{" "}
          <br />
          <br />
          <button className="btn px-10 btn-primary text-white font-semibold bg-gradient-to-r from-primary to-secondary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
