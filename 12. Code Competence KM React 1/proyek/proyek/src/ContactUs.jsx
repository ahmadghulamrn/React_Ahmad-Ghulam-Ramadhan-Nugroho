// src/ContactUs.jsx

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ username: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="container mx-auto my-10 p-5 bg-gray-900 text-white rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="mb-4 text-gray-300 text-center">
        Need to get in touch with us? Either fill out the form with your inquiry
        or find the department email you'd like to contact below.
      </p>
      <form id="contactForm" className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-300"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-600 bg-gray-800 text-white rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-4 rounded bg-red-600 text-white hover:bg-red-700 transition duration-200"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div
          id="submittedData"
          className="mt-6 p-4 bg-gray-800 border border-gray-600 rounded-md text-gray-300"
        >
          <h3 className="font-bold text-white">Submitted Data:</h3>
          <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.email}</p>
          <p>Message: {submittedData.message}</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
