import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { date, number, object, string } from "yup";

import { ROUTES } from "../../constants/routes";

interface FormValues {
  name: string;
  date: string;
  time: string;
  guests: number | string;
  occasion: string;
}

const validationSchema = object().shape({
  name: string()
    .min(2, "Please add at least two characters")
    .max(50, "The name is too long! Please use less than 50 characters")
    .required("Your name is required"),
  date: date()
    .min(new Date(), "The date must be later or equal than today")
    .required("The date is required"),
  time: string().required("The time is required"),
  guests: number()
    .min(1, "Please, add at least 1 guest")
    .max(20, "Please, set less than 20 guests")
    .required("Number of guests is required"),
  occasion: string().required("The occasion is required"),
});

const BookingForm = ({
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
      guests: "",
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
      <form onSubmit={formik.handleSubmit}>
        <h1 className="title">Book a Table</h1>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={formik.errors.name && formik.touched.name ? "error" : ""}
        />
        {formik.errors.name && formik.touched.name ? (
          <div className="error-text">{formik.errors.name}</div>
        ) : null}
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          onBlur={formik.handleBlur}
          className={formik.errors.date && formik.touched.date ? "error" : ""}
          onChange={(e) => {
            formik.setFieldValue("date", e.target.value);
            if (onDateChange) {
              onDateChange(new Date(e.target.value));
            }
          }}
          value={formik.values.date}
        />
        {formik.errors.date && formik.touched.date ? (
          <div className="error-text">{formik.errors.date}</div>
        ) : null}

        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.time}
          className={formik.errors.time && formik.touched.time ? "error" : ""}
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
          <div className="error-text">{formik.errors.time}</div>
        ) : null}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.guests && formik.touched.guests ? "error" : ""
          }
          value={formik.values.guests}
        />
        {formik.errors.guests && formik.touched.guests ? (
          <div className="error-text">{formik.errors.guests}</div>
        ) : null}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.occasion}
          className={
            formik.errors.occasion && formik.touched.occasion ? "error" : ""
          }
        >
          <option value="" disabled>
            Select an occasion
          </option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {formik.errors.occasion && formik.touched.occasion ? (
          <div className="error-text">{formik.errors.occasion}</div>
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

export default BookingForm;
