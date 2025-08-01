import { render, screen } from "@testing-library/react";

import BookingForm from "./BookingForm";

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

describe("BookingForm", () => {
  test("renders the booking form heading and all fields", () => {
    render(<BookingForm availableTimes={["17:00"]} />);
    const headingElement = screen.getByText("Book a Table");
    const nameInput = screen.getByLabelText("Name");
    const dateInput = screen.getByLabelText("Date");
    const timeSelect = screen.getByLabelText("Time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");

    expect(headingElement).toBeVisible();
    expect(nameInput).toBeVisible();
    expect(dateInput).toBeVisible();
    expect(timeSelect).toBeVisible();
    expect(guestsInput).toBeVisible();
    expect(occasionSelect).toBeVisible();
  });
});
