import { Routes, Route} from "react-router-dom";

import './App.css';
import Appointment from "./pages/Appointment/Appointment";
import Home from "./pages/Home/Home";
import Footer from "./pages/shared/Footer";
import Header from './pages/shared/Header';

function App() {
  return (
    <div className="max-w-7xl  mx-auto px-12">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/appointment" element={<Appointment
        ></Appointment>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
