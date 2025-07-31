import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { date, number, object, string } from "yup";

import { ROUTES } from "../../constants/routes";

import "./Booking.css";

interface FormValues {
  name: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

const validationSchema = object().shape({
  name: string()
    .min(2, "Please add at least two characters")
    .max(50, "The name is too long! Please use less than 50 characters")
    .required("Required"),
  date: date()
    .min(new Date(), "The date must be later or equal than today")
    .required("Required"),
  time: string().required("Required"),
  guests: number()
    .min(1, "Please, add at least 1 guest")
    .max(20, "Please, set less than 20 guests")
    .required("Required"),
  occasion: string().required("Required"),
});

const Booking = ({
  availableTimes,
  onDateChange,
}: {
  availableTimes: string[];
  onDateChange?: (date: Date) => void;
}) => {
  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    validationSchema,

    initialValues: {
      name: "",
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    },
    onSubmit: (values: FormValues) => {
      const success = submitAPI(values);
      if (success) {
        navigate(ROUTES.bookingConfirmation, {
          state: { bookingDetails: values },
        });
      }
    },
  });

  return (
    <div className="container">
      <form className="booking-form" onSubmit={formik.handleSubmit}>
        <h1 className="title">Book a Table</h1>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="date">Choose date</label>
        <input
          id="date"
          name="date"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          onBlur={formik.handleBlur}
          onChange={(e) => {
            formik.setFieldValue("date", e.target.value);
            if (onDateChange) {
              onDateChange(new Date(e.target.value));
            }
          }}
          value={formik.values.date}
        />
        {formik.errors.date && formik.touched.date ? (
          <div>{formik.errors.date}</div>
        ) : null}

        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          name="time"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.time}
        >
          <option value="" disabled>
            Select a time
          </option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {formik.errors.time && formik.touched.time ? (
          <div>{formik.errors.time}</div>
        ) : null}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          id="guests"
          name="guests"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.guests}
        />
        {formik.errors.guests && formik.touched.guests ? (
          <div>{formik.errors.guests}</div>
        ) : null}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.occasion}
        >
          <option value="" disabled>
            Select an occasion
          </option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {formik.errors.occasion && formik.touched.occasion ? (
          <div>{formik.errors.occasion}</div>
        ) : null}

        <button
          type="submit"
          disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Booking;
