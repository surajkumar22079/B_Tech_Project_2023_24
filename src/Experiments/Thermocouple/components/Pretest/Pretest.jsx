import React, { useState } from 'react';
import "./Pretest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is a thermocouple?',
      options: ['A device used to measure temperature', 'A device used to measure pressure', 'A device used to measure humidity'],
      answer: 'A device used to measure temperature',
    },
    {
      id: 2,
      question: 'How does a thermocouple generate a voltage?',
      options: ['Through the Seebeck effect', 'Through the Peltier effect', 'Through the Hall effect'],
      answer: 'Through the Seebeck effect',
    },
    {
      id: 3,
      question: 'What is the most common type of thermocouple?',
      options: ['Type K', 'Type J', 'Type T'],
      answer: 'Type K',
    },
    {
      id: 4,
      question: 'What is the typical temperature range of a Type K thermocouple?',
      options: ['-200°C to 1350°C', '-50°C to 500°C', '0°C to 100°C'],
      answer: '-200°C to 1350°C',
    },
    {
      id: 5,
      question: 'What is the primary advantage of using a thermocouple for temperature measurement?',
      options: ['Wide temperature range', 'High sensitivity', 'Low cost'],
      answer: 'Wide temperature range',
    }
];


  const handleOptionSelect = (option, answer) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const resetQuiz = () => {
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div className="lvdt-posttest">
      <h2>Pre-Test</h2>
      {questions.map((question) => (
        <div className="question-container" key={question.id}>
          <p className="question">{question.id}.{question.question}</p>
          <ul className="options">
            {question.options.map((option) => (
              <li key={option} className="option" onClick={() => handleOptionSelect(option, question.answer)}>{option}</li>
            ))}
          </ul>
          {showAnswer && selectedOption && selectedOption === question.answer && (
            <p className="correct-answer">Correct Answer!</p>
          )}
          {showAnswer && selectedOption && selectedOption !== question.answer && (
            <p className="incorrect-answer">Incorrect Answer. Correct Answer: {question.answer}</p>
          )}
        </div>
      ))}
      {showAnswer && (
        <button onClick={resetQuiz}>Restart Quiz</button>
      )}
    </div>
  );
};

export default LVDTPostTest;
