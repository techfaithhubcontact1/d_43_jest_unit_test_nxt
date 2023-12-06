//1. import area
import { render, screen } from "@testing-library/react"
import UnitTest from "./page"


//2. defination area
it("Must Render Testing in the component", () => {
    render(<UnitTest />)
    expect(screen.getByRole("Test")).toHaveTextContent("Testing")
})

//3. export area