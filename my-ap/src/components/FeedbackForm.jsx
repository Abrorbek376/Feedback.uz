import { useState, useContext, useEffect } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackForm() {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);


  useEffect(()=>{
    if(feedbackEdit.edit === true){
      setBtnDisabled(false);
      setText(feedbackEdit.feedback.text);
      setRating(feedbackEdit.feedback.rating);
    }
  }, [feedbackEdit])

  const handleChange = (e) => {
    e.preventDefault();
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Belgilar soni 10 tadan kam bo'lmasligi kerak!");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };

      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.feedback.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }

    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Your Opinion</h2>
        {/* rating select */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleChange}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <p className="message">{message}</p>}
      </form>
    </Card>
  );
}

export default FeedbackForm;