import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import Menu from "./Menu";
import Contact from "./Contact";
import { useCallback, useReducer } from "react";
import timeReducer from "../reducers/timeReducer";
import { fetchAPI } from "../api/time-api";


const Main = () => {
    const defaultDate = new Date().toISOString().split("T")[0];
    const initTimes = (date: string) => fetchAPI(date);

    const [availableTimes, dispatch] = useReducer(timeReducer, defaultDate, initTimes);

    const handleChange = useCallback((date: string) => {
        debugger
        const times = initTimes(date);
        dispatch({type: "SET_DATE_TIMES", payload: times});
    },[initTimes]);

    debugger

    return (
        <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<BookingForm 
            availableTimes={availableTimes} 

            
            onDateChange={handleChange}/>}
            
            />
            <Route path="/booking/success" element={<ConfirmedBooking/>}/>
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </main>
    );
};


export default Main;
