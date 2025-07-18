import { useReducer } from "react";

import { Route, Routes } from "react-router-dom";

import { fetchAPI } from "../api/time-api";
import timeReducer from "../reducers/timeReducer";

import About from "./About";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import Contact from "./Contact";
import Home from "./Home";
import Menu from "./Menu";

const Main = () => {
  const defaultDate = new Date().toISOString().split("T")[0];
  const initTimes = (date: string) => fetchAPI(date);

  const [availableTimes, dispatch] = useReducer(
    timeReducer,
    defaultDate,
    initTimes,
  );

  const handleChange = (date: string) => {
    const times = initTimes(date);
    dispatch({ type: "SET_DATE_TIMES", payload: times });
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/booking"
          element={
            <BookingForm
              availableTimes={availableTimes}
              onDateChange={handleChange}
            />
          }
        />
        <Route path="/booking/success" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default Main;
