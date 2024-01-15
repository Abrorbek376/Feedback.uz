import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

const FeedbackItem = ({ feedback }) => {
  const { deleteItem, editFeedbackFun } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <p>{feedback.text}</p>
      <button
        className="close"
        onClick={() => {
          deleteItem(feedback.id);
        }}
      >
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedbackFun(feedback)}>
        <FaEdit color="purple" />
      </button>
    </Card>
  );
};

export default FeedbackItem;