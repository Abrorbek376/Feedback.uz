import {useContext} from "react";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackStats() {
const {feedbacks} = useContext(FeedbackContext);
  let averageRating =
    feedbacks.reduce((a, b) => {
      return a + +b.rating;
    }, 0) / feedbacks.length;

  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>
        {feedbacks.length} {feedbacks.length > 1 ? " Reviews" : " Review"}
      </h4>
      <h4>Average Rating: {averageRating}</h4>
    </div>
  );
}

export default FeedbackStats;