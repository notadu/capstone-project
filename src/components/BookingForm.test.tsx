import { render, screen } from "@testing-library/react";

import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  test("Renders the BookingForm heading", () => {
    render(<BookingForm availableTimes={["17:00"]} onDateChange={vi.fn()} />);
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
  });
});
