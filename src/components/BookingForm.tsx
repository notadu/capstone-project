import { useEffect, useState } from "react";

import { submitAPI } from "../api/time-api";
// import { useNavigate } from "react-router-dom";

interface BookingFormData {
  name: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

const BookingForm = ({
  availableTimes,
  onDateChange,
}: {
  availableTimes: string[];
  onDateChange: (date: string) => void;
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });
  const [pending, setPending] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    // Reset form data when available times change
    setFormData((prev) => ({
      ...prev,
      time: availableTimes[0] || "",
    }));
  }, [availableTimes]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
    if (name === "date") {
      onDateChange(value);
    }
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    await submitAPI(formData);
    setPending(false);
    // navigate('/booking/success'); mock for tests
  };

  return (
    <>
      <h2>Book a Table</h2>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={submitForm}
      >
        <label htmlFor="date">Choose date</label>
        <input
          required
          disabled={pending}
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          name="date"
        />
        <label htmlFor="time">Choose time</label>
        <select
          required
          disabled={pending}
          id="time"
          onChange={handleChange}
          value={formData.time}
          name="time"
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          required
          disabled={pending}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={formData.guests}
          onChange={handleChange}
          name="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          required
          disabled={pending}
          id="occasion"
          onChange={handleChange}
          value={formData.occasion}
          name="occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input disabled={pending} type="submit" value="Book Now" />
      </form>
    </>
  );
};

export default BookingForm;
