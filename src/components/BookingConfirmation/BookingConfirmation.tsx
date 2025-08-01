import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const { state } = useLocation();

  return (
    <div className="booking-confirmation container">
      <h1 className="title">Booking Confirmed</h1>
      <p>Your booking has been successfully confirmed.</p>
      {state?.bookingDetails && (
        <div>
          <p>{`Thank you, ${state?.bookingDetails.name}, for choosing Little Lemon!`}</p>
          <h3>Reservation details</h3>
          <ul>
            <li>
              <p>{`Date: ${state?.bookingDetails.date}`}</p>
            </li>
            <li>
              <p>{`Time: ${state?.bookingDetails.time}`}</p>
            </li>
            <li>
              <p>{`Number of guests: ${state?.bookingDetails.guests}`}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookingConfirmation;
