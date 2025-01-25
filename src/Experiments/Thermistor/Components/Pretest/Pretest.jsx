import React, { useState } from 'react';
import "./Pretest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is a thermistor?',
      options: ['A device used to measure temperature', 'A device used to measure pressure', 'A device used to measure humidity'],
      answer: 'A device used to measure temperature',
    },
    {
      id: 2,
      question: 'How does the resistance of a thermistor change with temperature?',
      options: ['It increases with temperature', 'It decreases with temperature', 'It remains constant with temperature'],
      answer: 'It decreases with temperature',
    },
    {
      id: 3,
      question: 'What is the resistance-temperature relationship of a thermistor?',
      options: ['Linear', 'Exponential', 'Logarithmic'],
      answer: 'Exponential',
    },
    {
      id: 4,
      question: 'What is the typical resistance value of a thermistor at room temperature?',
      options: ['100 ohms', '1000 ohms', '10000 ohms'],
      answer: '10000 ohms',
    },
    {
      id: 5,
      question: 'What is the primary advantage of using a thermistor for temperature measurement?',
      options: ['High sensitivity', 'High linearity', 'Low cost'],
      answer: 'High sensitivity',
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
