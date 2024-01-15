import "./index.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

  return (
    <>
      <FeedbackProvider>
        <Header />

        <main>
          <div className="container">
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </div>
        </main>
      </FeedbackProvider>
    </>
  );
}

//ES7+ React
export default App;
