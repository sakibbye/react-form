import React, { useState, useEffect } from 'react';

function TextAnswerComponent(props) {
  const [textAnswer, setTextAnswer] = useState("");

  useEffect(() => {
    const savedTextAnswer = localStorage.getItem(props.questionId);
    if (savedTextAnswer) {
      setTextAnswer(savedTextAnswer);
    }
  }, [props.questionId]);

  const handleTextAnswerChange = (event) => {
    setTextAnswer(event.target.value);
    localStorage.setItem(props.questionId, event.target.value);
  }

  return (
    <div className="quiz-suggestion">
      <h3>{props.question}</h3>
      <textarea value={textAnswer} onChange={handleTextAnswerChange} />
    </div>
  );
}

export default TextAnswerComponent;
