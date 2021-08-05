import { render, screen } from "@testing-library/react";
import Landing from "../views/Landing";

describe("Testing 'Landing' -view", () => {
	it("Expects 'sune' to be in the title", () => {
		render(<Landing />);
		var text = screen.getByText(/sune/i);
		expect(text).toBeInTheDocument();
	});
});
