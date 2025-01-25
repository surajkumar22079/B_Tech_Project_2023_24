import React, { useState } from 'react';
import "./Pretest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the primary function of a strain gauge?',
      options: ['To measure temperature', 'To measure pressure', 'To measure strain'],
      answer: 'To measure strain',
    },
    {
      id: 2,
      question: 'What property of a material does a strain gauge measure?',
      options: ['Electrical resistance', 'Thermal conductivity', 'Mechanical strength'],
      answer: 'Electrical resistance',
    },
    {
      id: 3,
      question: 'How does a strain gauge change in response to applied strain?',
      options: ['Its length changes', 'Its electrical resistance changes', 'Its color changes'],
      answer: 'Its electrical resistance changes',
    },
    {
      id: 4,
      question: 'What is the typical material used to make strain gauges?',
      options: ['Copper', 'Platinum', 'Metal foil or semiconductor material'],
      answer: 'Metal foil or semiconductor material',
    },
    {
      id: 5,
      question: 'What is the purpose of using multiple strain gauges in a Wheatstone bridge configuration?',
      options: ['To increase sensitivity', 'To decrease accuracy', 'To reduce cost'],
      answer: 'To increase sensitivity',
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
