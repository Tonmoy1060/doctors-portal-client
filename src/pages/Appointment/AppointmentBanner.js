import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from '../../assets/images/bg.png';

const AppointmentBanner = ({date, setDate}) => {
  return (
    <div style={{background:`url(${bg})`}}>
      <div className="hero min-h-screen">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img src={chair} className=" max-w-xl rounded-lg shadow-2xl" />
          <div className="pr-32">
            <DayPicker 
            mode="single"
            selected={date}
            onSelect={setDate}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
