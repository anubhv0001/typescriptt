import React from "react";
import FeedbackForm from "./components/FeedbackForm";


const App: React.FC = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Customer Feedback Form</h1>
      <FeedbackForm />
    </div>
  );
};

export default App;
