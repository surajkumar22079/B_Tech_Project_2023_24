import React, { useState } from 'react';
import "./Pretest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the abbreviation for Resistance Temperature Detector?',
      options: ['RTD', 'RDT', 'TDR'],
      answer: 'RTD',
    },
    {
      id: 2,
      question: 'What physical property does an RTD measure?',
      options: ['Resistance', 'Temperature', 'Voltage'],
      answer: 'Temperature',
    },
    {
      id: 3,
      question: 'Which metal is commonly used in RTDs?',
      options: ['Copper', 'Platinum', 'Nickel'],
      answer: 'Platinum',
    },
    {
      id: 4,
      question: 'What is the typical resistance change of an RTD with temperature?',
      options: ['Positive temperature coefficient', 'Negative temperature coefficient', 'No change in resistance'],
      answer: 'Positive temperature coefficient',
    },
    {
      id: 5,
      question: 'How does the resistance of an RTD vary with temperature?',
      options: ['Linearly', 'Exponentially', 'Logarithmically'],
      answer: 'Linearly',
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
