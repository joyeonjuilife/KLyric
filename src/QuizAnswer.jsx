import "./QuizAnswer.css";
import {
  FiCheckCircle,
  FiXCircle,
  FiRotateCw,
  FiHome,
} from "react-icons/fi";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function QuizAnswer() {
  const navigate = useNavigate();
  const location = useLocation();

  const correctCount =
    location.state?.correct || 0;

  const wrongCount =
    location.state?.wrong || 0;

  const handleRetry = () => {
    navigate("/");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="answer-page">
      <nav className="navbar">
        <div className="logo">Klyric</div>

        <div className="nav-center">
          <span className="active">
            Quiz
          </span>
        </div>

        <div className="profile">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />
        </div>
      </nav>

      <main className="answer-content">
        <div className="answer-card">
          <div className="answer-badge">
            Klyric
          </div>

          <h1>Quiz Complete!</h1>

          <div className="result-grid">
            <div className="result-box">
              <div className="result-header">
                <FiCheckCircle />

                <span>
                  CORRECT ANSWERS
                </span>
              </div>

              <div className="correct-number">
                {correctCount}
              </div>
            </div>

            <div className="result-box">
              <div className="result-header wrong">
                <FiXCircle />

                <span>
                  WRONG ANSWERS
                </span>
              </div>

              <div className="wrong-number">
                {wrongCount}
              </div>
            </div>
          </div>

          <div className="button-group">
            <button
              className="retry-btn"
              onClick={handleRetry}
            >
              <FiRotateCw />
              Retry Quiz
            </button>

            <button
              className="home-btn"
              onClick={handleHome}
            >
              <FiHome />
              Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}