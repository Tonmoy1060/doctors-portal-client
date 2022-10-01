// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";

// const MyAppointment = () => {
//   const [user, loading, error] = useAuthState(auth);
//   const [appointment, setAppointment] = useState([]);
//   useEffect(() => {
//     if (user) {
//       fetch(`http://localhost:5000/booking?email=${user.email}`)
//         .then((res) => res.json())
//         .then((data) => setAppointment(data));
//     }
//   }, [user]);
//   return <div>
//     {appointment.length}
//   </div>;
// };

// export default MyAppointment;
