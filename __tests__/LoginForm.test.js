import { render, screen } from "@testing-library/react";
import LoginForm from "../components/LoginForm";

describe("LoginForm Component Testing", () => {

  test("renders Session 3 Login title", () => {
    render(<LoginForm />);
    expect(screen.getByText("Session 3 Login")).toBeInTheDocument();
  });

  test("renders Login button", () => {
    render(<LoginForm />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

});