import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Testing 'Card' -component", () => {
	it("Expects 'bqardi' to be in the title", () => {
		render(<Card title="BQardi"/>);
		var text = screen.getByText(/bqardi/i);
		expect(text).toBeInTheDocument();
	});
});
