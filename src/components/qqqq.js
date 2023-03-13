import { useState, useEffect } from "react";

import "./styles.scss";

function Quiz() {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  useEffect(() => {
    const storedAnswers = localStorage.getItem("quizAnswers");
    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
  }, []);

  const handleOptionChange = (event) => {
    setAnswers({
      ...answers,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    alert("Quiz submitted!");
  };

  return (
    <div className="iwgco">
      <h4>Review all images or the video and then provide your assessment</h4>
      <h4><span className="required">*</span> Response is required.</h4>
      <form onSubmit={handleSubmit}>
        <div className="quiz-question">Please select one of the following <span className="required">*</span></div>
        <div className="quiz-option">
          <label>
            <input
              type="radio"
              name="question1"
              value="option1"
              required={true}
              checked={answers.question1 === "option1"}
              onChange={handleOptionChange}
            />
            LA GRADE A esophagitis
          </label>
        </div>
        <div className="quiz-option">
          <label>
            <input
              type="radio"
              name="question1"
              value="option2"
              checked={answers.question1 === "option2"}
              onChange={handleOptionChange}
            />
            LA GRADE B esophagitis
          </label>
        </div>
        <div className="quiz-option">
          <label>
            <input
              type="radio"
              name="question1"
              value="option3"
              checked={answers.question1 === "option3"}
              onChange={handleOptionChange}
            />
            LA GRADE C esophagitis
          </label>
        </div>
        <div className="quiz-option">
          <label>
            <input
              type="radio"
              name="question1"
              value="option4"
              checked={answers.question1 === "option4"}
              onChange={handleOptionChange}
            />
            LA GRADE D esophagitis
          </label>
        </div>
        <div className="quiz-option">
          <label>
            <input
              type="radio"
              name="question1"
              value="option5"
              checked={answers.question1 === "option5"}
              onChange={handleOptionChange}
            />
            No esophagitis
          </label>
        </div>
        <div className="quiz-option">
          <label>
            <input
              type="radio"
              name="question1"
              value="option6"
              checked={answers.question1 === "option6"}
              onChange={handleOptionChange}
            />
            Quality too poor to assess
          </label>
        </div>

        <div className="quiz-question">
          On a scale from 1 (low being between 1 to 5) to 10 (high being between
          6 to 10), how confident are you in your assessment of esophagitis
          severity? <span className="required">*</span>
        </div>
        <div className="horizontal-option">
          <label>
            <input
              type="radio"
              name="question2"
              value="option1"
              required={true}
              checked={answers.question2 === "option1"}
              onChange={handleOptionChange}
            />
            1
          </label>
        
          <label>
            <input
              type="radio"
              name="question2"
              value="option2"
              checked={answers.question2 === "option2"}
              onChange={handleOptionChange}
            />
            2
          </label>

         <label>
            <input
              type="radio"
              name="question2"
              value="option3"
              checked={answers.question2 === "option3"}
              onChange={handleOptionChange}
            />
            3
          </label>
       
        <label>
            <input
              type="radio"
              name="question2"
              value="option4"
              checked={answers.question2 === "option4"}
              onChange={handleOptionChange}
            />
            4
          </label>
       
         <label>
            <input
              type="radio"
              name="question2"
              value="option5"
              checked={answers.question2 === "option5"}
              onChange={handleOptionChange}
            />
            5
          </label>
        </div>
          <div className="horizontal-option">
          <label>
            <input
              type="radio"
              name="question2"
              value="option6"
              checked={answers.question2 === "option6"}
              onChange={handleOptionChange}
            />
            6
          </label>
        
           <label>
            <input
              type="radio"
              name="question2"
              value="option7"
              checked={answers.question2 === "option7"}
              onChange={handleOptionChange}
            />
            7
          </label>
        
           <label>
            <input
              type="radio"
              name="question2"
              value="option8"
              checked={answers.question2 === "option8"}
              onChange={handleOptionChange}
            />
            8
          </label>
       
         <label>
            <input
              type="radio"
              name="question2"
              value="option9"
              checked={answers.question2 === "option9"}
              onChange={handleOptionChange}
            />
            9
          </label>
       
          <label>
            <input
              type="radio"
              name="question2"
              value="option10"
              checked={answers.question2 === "option10"}
              onChange={handleOptionChange}
            />
            10
          </label>
        </div>

        <div className="quiz-question">
          The overall quality of the images/video was: <span className="required">*</span>
        </div>
        <div className="quiz-option">
          <label>
            <input
              type="radio"
              name="question3"
              value="option1"
              required={true}
              checked={answers.question3 === "option1"}
              onChange={handleOptionChange}
            />
            Excellent
          </label>
        </div>
        <div className="quiz-option">
          <label>
            <input
              type="radio"
              name="question3"
              value="option2"
              checked={answers.question3 === "option2"}
              onChange={handleOptionChange}
            />
            Good
          </label>
        </div>
        <div className="quiz-option">
          <label>
            <input
              type="radio"
              name="question3"
              value="option3"
              checked={answers.question3 === "option3"}
              onChange={handleOptionChange}
            />
            Acceptable
          </label>
        </div>
        <div className="quiz-option">
          <label>
            <input
              type="radio"
              name="question3"
              value="option4"
              checked={answers.question3 === "option4"}
              onChange={handleOptionChange}
            />
            Poor
          </label>
        </div>
        <div className="quiz-option">
          <label>
            <input
              type="radio"
              name="question3"
              value="option5"
              checked={answers.question3 === "option5"}
              onChange={handleOptionChange}
            />
            Very Poor
          </label>
        </div>

        <div className="quiz-suggestion">
          <label>
            Add an optional comment on the media (e.g. if the quiz includes
            images and a video, which media did you primarily base your
            assessment on?):
            <textarea
              name="suggestion"
              value={answers.suggestion}
              onChange={handleOptionChange}
            />
          </label>
        </div>

        <div className="quiz-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Quiz;
