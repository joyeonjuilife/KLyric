import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizPage.css";

const defaultQuestions = [
  {
    id: 1,
    type: "blank",
    artist: "BOYNEXTDOOR - VIRAL",
    lyric: `"Sorry", "________" Hate these words Maybe I still...`,
    answer: "love you",
  },
  {
    id: 2,
    type: "blank",
    artist: "MEOVV - DDI RO RI",
    lyric: `"DDI RO RI When I walk in like a ________
Like a ________"`,
    answer: "threat",
  },
  {
    id: 3,
    type: "blank",
    artist: "CORTIS - REDRED",
    lyric: `"쉿 한파에 I put my hands in my ________
Outside 한 밤에 사람 없는 스팟으로 빨리"`,
    answer: "pocket",
  },
  {
    id: 4,
    type: "blank",
    artist: "aespa - LEMONADE",
    lyric: `"I go in all the way
Don't step on the ________"`,
    answer: "brakes",
  },
  {
    id: 5,
    type: "meaning",
    artist: "I.O.I - 갑자기",

    lyric: `"자려고 누웠는데 갑자기 너에 대한 생각에 잠겨
In the midnight 별처럼 감정들이 쏟아져"`,

    question: "midnight의 뜻은?",

    options: ["정오", "새벽", "자정", "아침"],

    answer: "자정",
  },
  {
    id: 6,
    artist: "BTS - BUTTER",

    lyric: `"Smooth like butter Like a criminal undercover
Gon' pop like trouble Breakin' into your heart like that"`,

    question: "위 가사의 의미로 가장 알맞은 것은?",

    options: [
      "나는 버터를 좋아한다",
      "나는 몰래 활동하는 범죄자처럼 매끄럽다",
      "나는 경찰이다",
      "나는 요리 중이다",
    ],

    answer: "나는 몰래 활동하는 범죄자처럼 매끄럽다",
  },

  /* 객관식 추가 */

  {
    id: 7,
    type: "meaning",
    artist: "BTS - BUTTER",

    lyric: `""`,

    question: "",

    options: [
      "",
      "",
      "",
      "",
    ],

    answer: "",
  },

  {
    
  }
];

export default function QuizPage() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const [correctCount] = useState(0);
  const [wrongCount] = useState(0);

  useEffect(() => {
    setQuestions(defaultQuestions);
  }, []);

  const handleChange = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleOptionClick = (id, option) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: option,
    }));
  };

  const isAllAnswered =
    questions.length > 0 &&
    questions.every((q) => answers[q.id]?.toString().trim());

  const checkAnswers = () => {
    let correct = 0;

    questions.forEach((q) => {
      const userAnswer = answers[q.id]?.trim().toLowerCase();

      if (userAnswer === q.answer.toLowerCase()) {
        correct++;
      }
    });

    const wrong = questions.length - correct;

    navigate("/quiz-answer", {
      state: {
        correct,
        wrong,
      },
    });
  };

  return (
    <div className="quiz-page">
      <nav className="navbar">
        <div className="logo">Klyric</div>

        <div className="nav-center">
          <span className="active">Quiz</span>
        </div>

        <div className="profile">
          <img src="https://i.pravatar.cc/100" alt="profile" />
        </div>
      </nav>

      <main className="quiz-content">
        <h1>
          Learn English with <span>K-POP</span> Lyrics
        </h1>

        <p>
          Level up your English skills while vibing to your favorite idols. Fill
          in the blanks and choose the correct meanings!
        </p>

        <div className="question-list">
          {questions.map((q) => (
            <div key={q.id} className="question-card">
              <div className="card-top">
                <div className="question-badge">Q{q.id}</div>

                <span>{q.artist}</span>
              </div>

              <div className="question-text">{q.lyric}</div>

              {q.type === "blank" ? (
                <input
                  type="text"
                  placeholder="Type your answer..."
                  value={answers[q.id] || ""}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                />
              ) : (
                <div className="option-list">
                  <p className="meaning-question">{q.question}</p>

                  {q.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`option-btn ${
                        answers[q.id] === option ? "selected" : ""
                      }`}
                      onClick={() => handleOptionClick(q.id, option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="quiz-footer">
        <div className="score-section">
          <div className="score-box">
            <span className="score-label">Correct</span>

            <span className="score-value correct">{correctCount}</span>
          </div>

          <div className="divider"></div>

          <div className="score-box">
            <span className="score-label">Wrong</span>

            <span className="score-value wrong">{wrongCount}</span>
          </div>
        </div>

        <button
          className={`check-btn ${isAllAnswered ? "active" : "disabled"}`}
          disabled={!isAllAnswered}
          onClick={checkAnswers}
        >
          Check Answers
        </button>
      </footer>
    </div>
  );
}
