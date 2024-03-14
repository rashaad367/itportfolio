import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form: React.FC = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    // Gets info from user input within elements with these names
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    // Fetch data to server page from targeted elements
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();

    if (response.ok) {
      toast.success(result.status);
    } else {
      toast.error(result.status);
    }
  };

  return (
    <div>
      <div
        className={`container flex flex-col md:flex-row mx-auto`}
      >
        <ToastContainer position="top-center" />

        <form
          className="max-w-md bg-white shadow-md w-full md:w-1/2 px-8 pt-6 pb-12"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="name"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="email"
              name="email"
              type="text"
              required
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight resize-none"
              id="message"
              name="message"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <button
                className="font-mono font-bold py-2 px-4 rounded"
                type="submit"
              >
                {status}
              </button>
            </div>
          </div>
        </form>
        <div className="max-w-md w-full md:w-1/2 px-8 pt-6 pb-12 my-auto">
          <p className="sub-heading">
            {"I look foward to chatting it up with you. "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
