import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { FeedbackContext } from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = ({ handleDelete }) => {
  const { feedbacks, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedbacks || feedbacks.length === 0)) {
    return <p style={{ textAlign: "center" }}>No feedback yet!</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
};

export default FeedbackList;
