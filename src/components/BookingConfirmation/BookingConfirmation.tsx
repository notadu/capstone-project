import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const { state } = useLocation();

  return (
    <div className="booking-confirmation">
      <h1>Booking Confirmed</h1>
      <p>Your booking has been successfully confirmed.</p>
      <p>Thank you for choosing Little Lemon!</p>
      {state?.bookingDetails && (
        <div>{`${state?.bookingDetails.name} ${state?.bookingDetails.date} ${state?.bookingDetails.time} ${state?.bookingDetails.guests} guests`}</div>
      )}
    </div>
  );
};

export default BookingConfirmation;
