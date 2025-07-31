import { useCallback, useEffect, useReducer } from "react";

import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import timeReducer from "../../reducers/timeReducer";
import About from "../About";
import BookingForm from "../Booking";
import BookingConfirmation from "../BookingConfirmation";
import Home from "../Home";
import LoginForm from "../Login";
import Menu from "../Menu";
import Order from "../OnlineOrder";

const Main = () => {
  const defaultDate = new Date();

  const initTimes = (date: Date) => fetchAPI(date);

  const [state, dispatch] = useReducer(timeReducer, {
    bookingDetails: {
      date: defaultDate.toISOString().split("T")[0],
      time: [],
    },
  });

  const handleDateChange = useCallback((date: Date) => {
    dispatch({ type: "SET_DATE", payload: date.toISOString().split("T")[0] });
  }, []);

  useEffect(() => {
    const newTimes = initTimes(new Date(state.bookingDetails.date));
    dispatch({ type: "SET_TIMES", payload: newTimes });
  }, [state.bookingDetails.date]);

  return (
    <main>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route
          path={ROUTES.booking}
          element={
            <BookingForm
              onDateChange={handleDateChange}
              availableTimes={state.bookingDetails.time}
            />
          }
        />
        <Route
          path={ROUTES.bookingConfirmation}
          element={<BookingConfirmation />}
        />
        <Route path={ROUTES.menu} element={<Menu />} />
        <Route path={ROUTES.orderOnline} element={<Order />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.login} element={<LoginForm />} />
      </Routes>
    </main>
  );
};

export default Main;
