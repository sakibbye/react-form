import React, { useState, useEffect } from "react";

const Question = ({ question, options, id, required }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedOption = localStorage.getItem(question);
    console.log(storedOption)
    if (storedOption) {
      setSelectedOption(storedOption);
    }
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    localStorage.setItem(question, option);
  };
  return (
    <div>
      <h3>
        {question}
        <span className="required"> *</span>
      </h3>

      {id == 2
        ? options.map((option, index) => (
            <div className="horizontal-option" key={index}>
              <label htmlFor={`${question}-option-${index}`}>
                <input
                  type="radio"
                  id={`${question}-option-${index}`}
                  name={question}
                  value={option}
                  required={required}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            </div>
          ))
        : options.map((option, index) => (
            <div className="quiz-option" key={index}>
              <label htmlFor={`${question}-option-${index}`}>
                <input
                  type="radio"
                  id={`${question}-option-${index}`}
                  name={question}
                  value={option}
                  required={true}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            </div>
          ))}
    </div>
  );
};

export default Question;
