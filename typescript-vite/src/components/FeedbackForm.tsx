import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";


interface FeedbackData {
  name: string;
  email: string;
  rating: number;
  feedback: string;
}

interface Confirmation {
  message: string;
  data?: FeedbackData;
}

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackData>({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  });

  const [confirmation, setConfirmation] = useState<Confirmation>({
    message: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.rating || !formData.feedback) {
      setConfirmation({ message: "⚠️ Please fill out all fields before submitting." });
      return;
    }

    setConfirmation({
      message: "✅ Thank you for your feedback!",
      data: formData,
    });

    
    setFormData({
      name: "",
      email: "",
      rating: 0,
      feedback: "",
    });
  };

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <br />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>
        <br /><br />

        <label>
          Email: <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>
        <br /><br />

        <label>
          Rating (1–5): <br />
          <input
            type="number"
            name="rating"
            placeholder="Rate us (1–5)"
            min="1"
            max="5"
            value={formData.rating || ""}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>
        <br /><br />

        <label>
          Feedback: <br />
          <textarea
            name="feedback"
            placeholder="Write your feedback..."
            value={formData.feedback}
            onChange={handleChange}
            rows={4}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </label>
        <br /><br />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {confirmation.message && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <p>{confirmation.message}</p>
          {confirmation.data && (
            <div>
              <p><strong>Name:</strong> {confirmation.data.name}</p>
              <p><strong>Email:</strong> {confirmation.data.email}</p>
              <p><strong>Rating:</strong> {confirmation.data.rating}</p>
              <p><strong>Feedback:</strong> {confirmation.data.feedback}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
