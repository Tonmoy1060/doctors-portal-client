import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "./App.css";
import Appointment from "./pages/Appointment/Appointment";
import AddDoctor from "./pages/Dashboard/AddDoctor";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageDoctor from "./pages/Dashboard/ManageDoctor";
import MyDashboard from "./pages/Dashboard/MyDashboard";
import MyReview from "./pages/Dashboard/MyReview";
import Payment from "./pages/Dashboard/Payment";
import Users from "./pages/Dashboard/Users";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Footer from "./pages/shared/Footer";
import Header from "./pages/shared/Header";
import RequireAuth from "./pages/shared/RequireAuth";

function App() {
  return (
    <div className="max-w-7xl  mx-auto px-12">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyDashboard></MyDashboard>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="doctors" element={<AddDoctor></AddDoctor>}></Route>
          <Route path="manageDoctor" element={<ManageDoctor></ManageDoctor>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
    
  );
}

export default App;
