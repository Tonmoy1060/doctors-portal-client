import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyDashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [appointment, setAppointment] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            navigate("/");
            signOut(auth);
            localStorage.removeItem("accessToken");
          }
          return res.json();
        })
        .then((data) => setAppointment(data));
    }
  }, [user]);
  return (
    <div>
      <h1 className="mt-2 py-2">{user.email}'s all order</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>TREATMENT</th>
              <th>PAyment</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <th>{a.patient}</th>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <th>{a.treatment}</th>
                <th>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs w-full  btn-success ">PAY</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    
                      <span className="text-success">PAID</span>
                    
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDashboard;
