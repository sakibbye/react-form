import React, { useState, useEffect } from "react";
import Question from "./question";
import Suggestion from "./suggestion";
import "./styles.scss";


function Quiz() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Please select one of the following",
      options: ["LA GRADE A esophagitis", "LA GRADE B esophagitis", "LA GRADE C esophagitis", "LA GRADE D esophagitis", "No esophagitis", "Quality too poor to assess",
      ],
      answer: "",
    },
    {
      id: 2,
      question:
        "On a scale from 1 (low being between 1 to 5) to 10 (high being between 6 to 10), how confident are you in your assessment of esophagitis severity?",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      answer: "",
    },
    {
      id: 3,
      question: "The overall quality of the images/video was:",
      options: ["Excellent", "Good", "Acceptable", "Poor", "Very Poor"],
      answer: "",
    },
    {
      id: 4,
      question: "Add an optional comment on the media (e.g. if the quiz includes images and a video, which media did you primarily base your assessment on?)",
      answer: "",
    }
  ]);

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("answers"));
    if (storedAnswers) {
      setQuestions((prevQuestions) => {
        return prevQuestions.map((question) => {
          const storedAnswer = storedAnswers.find(
            (answer) => answer.id === question.id
          );
          if (storedAnswer) {
            return { ...question, answer: storedAnswer.answer };
          } else {
            return question;
          }
        });
      });
    }
  }, []);

  function handleOptionChange(id, selectedOption) {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === id) {
          return { ...question, answer: selectedOption };
        } else {
          return question;
        }
      });
    });
  }

  function handleShortAnswerChange(id, text) {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === id) {
          return { ...question, answer: text };
        } else {
          return question;
        }
      });
    });
  }

  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(questions));
  }, [questions]);

  return (
    <div className="iwgco">
      <h4>Review all images or the video and then provide your assessment</h4>
      <h4><span className="required">*</span> Response is required.</h4>
      {questions.map((question) => {
        if (question.options) {
          return (
            <Question
              key={question.id}
              id={question.id}
              question={question.question}
              options={question.options}
              selectedOption={question.answer}
              onOptionChange={handleOptionChange}
            />
          );
        } else {
          return (
            <Suggestion
              key={question.id}
              id={question.id}
              question={question.question}
              textAnswer={question.answer}
              onTextAnswerChange={handleShortAnswerChange}
            />
          );
        }
      })}
      <div className="quiz-submit">
          <button type="submit" onClick={()=> alert("Form Submitted")}>Submit</button>
        </div>
    </div>
  );
}

export default Quiz;
