import React, { createContext, useState, ReactNode, useContext } from "react";

type FeedbackData = {
  name: string;
  email: string;
  rating: number;
  comments: string;
};

type FeedbackContextType = {
  feedback: FeedbackData;
  setFeedback: React.Dispatch<React.SetStateAction<FeedbackData>>;
};

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [feedback, setFeedback] = useState<FeedbackData>({
    name: "",
    email: "",
    rating: 0,
    comments: "",
  });

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) throw new Error("useFeedback must be used within FeedbackProvider");
  return context;
};
