import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";
import { useState } from "react";

const FeedbackForm = () => {
    const { feedback, setFeedback } = useFeedback();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!feedback.name || !feedback.email || feedback.rating === 0) {
            setError("Please fill all required fields before proceeding.");
            return;
        }

        navigate("/summary");
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Feedback Form</h2>

            <input
                type="text"
                name="name"
                placeholder="Name"
                value={feedback.name}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={feedback.email}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
                min="1"
                max="5"
                value={feedback.rating}
                onChange={handleChange}
                required
            />

            <textarea
                name="comments"
                placeholder="Comments"
                value={feedback.comments}
                onChange={handleChange}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default FeedbackForm;
