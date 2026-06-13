import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  import QuizPage from "./QuizPage";
  import QuizAnswer from "./QuizAnswer";
  
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<QuizPage />}
          />
  
          <Route
            path="/quiz-answer"
            element={<QuizAnswer />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;