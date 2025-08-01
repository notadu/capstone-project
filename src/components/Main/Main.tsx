import { lazy, Suspense, useCallback, useEffect, useReducer } from "react";

import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import timeReducer from "../../reducers/timeReducer";
import Loader from "../Loader";

const About = lazy(() => import("../About"));
const BookingForm = lazy(() => import("../Booking"));
const BookingConfirmation = lazy(() => import("../BookingConfirmation"));
const Home = lazy(() => import("../Home"));
const LoginForm = lazy(() => import("../Login"));
const Menu = lazy(() => import("../Menu"));
const Order = lazy(() => import("../OnlineOrder"));

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
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </main>
  );
};

export default Main;
