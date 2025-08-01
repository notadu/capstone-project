import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

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

  test("if error is shown when invalid data is added", async () => {
    render(<BookingForm availableTimes={["17:00"]} />);
    const nameInput = screen.getByRole("textbox", { name: "Name" });
    const guestsInput = screen.getByLabelText("Number of guests");

    expect(nameInput).toHaveValue("");
    userEvent.type(nameInput, "a");

    await waitFor(() => expect(nameInput).toHaveValue("a"));

    userEvent.type(guestsInput, "2"); // focus out

    await waitFor(() =>
      expect(
        screen.getByText("Please add at least two characters"),
      ).toBeVisible(),
    );
  });
});
