import { render, screen, fireEvent, getByTitle } from '@testing-library/react';
 import ContactForm from './ContactForm';

// test('renders learn react link', () => {
//   render(<ContactForm />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Contact form in ContactForm.js", () => {
  it("renders the form with correct labels and inputs", () => {
    const { getByLabelText, getByRole } = render(<ContactForm/>);

    expect(getByLabelText("Name:")).toBeInTheDocument();
    expect(getByLabelText("Email:")).toBeInTheDocument();
    expect(getByLabelText("Message:")).toBeInTheDocument();
    expect(getByRole("textbox", { name: "Name:" })).toBeInTheDocument();
    expect(getByRole("textbox", { name: "Email:" })).toBeInTheDocument();
    expect(getByRole("textbox", { name: "Message:" })).toBeInTheDocument();
  });

  it("displays errors for empty fields", () => {
    const { getByText, getByRole } = render(<ContactForm/>);
    const submitButton = getByRole("button", { type: "submit" });
    fireEvent.click(submitButton);

    expect(getByText("Name is required")).toBeInTheDocument();
    expect(getByText("Email is required")).toBeInTheDocument();
    expect(getByText("Message is required")).toBeInTheDocument();
  });


  it("displays error for invalid email", () => {
    const { getByLabelText, getByText, getByRole } = render(<ContactForm/>);
    const emailInput = getByRole("textbox", { name: "Email:" });
    fireEvent.change(emailInput, { target: { value: "wdwkfb.com@" } });
    const submitButton = getByRole("button", { type: "submit" });
    fireEvent.click(submitButton);

    expect(getByLabelText("Email:")).toBeInTheDocument();
    expect(getByText("Email is not valid")).toBeInTheDocument();
  });

  it('submits the form with correct data when the submit button is clicked', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { getByLabelText, getByText } = render(<ContactForm/>);

    const nameInput = getByLabelText('Name:');
    const emailInput = getByLabelText('Email:');
    const messageInput = getByLabelText('Message:');
    const submitButton = getByText('Submit');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, I would like to get in touch.' } });
    fireEvent.click(submitButton);

    expect(console.log).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'johndoe@example.com',
      message: 'Hello, I would like to get in touch.'
    });
    spy.mockRestore();
  });
});