import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Testing 'Button' -component", () => {
	it("Expects 'childname' to be in the title", () => {
		render(<Button>childname</Button>);
		var text = screen.getByText(/childname/i);
		expect(text).toBeInTheDocument();
	});
});
