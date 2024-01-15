import { createContext, useState, useEffect } from "react";
export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`/feedbacks?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedbacks(data);
    setIsLoading(false);
  };

  //add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedbacks([data, ...feedbacks]);
  };

  //delete feedback
  const deleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/feedbacks/${id}`, { method: "DELETE" });
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  //edit and update
  const [feedbackEdit, setFeedbackEdit] = useState({
    edit: false,
    feedback: {},
  });

  const editFeedbackFun = (feedback) => {
    setFeedbackEdit({
      edit: true,
      feedback,
    });
  };

  const updateFeedback = async (id, updFeedback) => {
    const response = await fetch(`/feedbacks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(updFeedback)

    });

    const data = await response.json();
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id ? { ...feedback, ...data } : feedback
      )
    );
    console.log(123);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        deleteItem,
        addFeedback,
        editFeedbackFun,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
