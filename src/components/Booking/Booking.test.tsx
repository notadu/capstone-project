import { render, screen } from "@testing-library/react";

import Booking from "./Booking";

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

describe("BookingForm", () => {
  test("renders the booking form heading and all fields", () => {
    render(<Booking availableTimes={["17:00"]} />);
    const headingElement = screen.getByText("Book a Table");
    const nameInput = screen.getByLabelText("Name");
    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
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
