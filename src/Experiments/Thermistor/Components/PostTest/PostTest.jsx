import React, { useState } from 'react';
import "./PostTest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the most common type of thermistor?',
      options: ['Negative Temperature Coefficient (NTC)', 'Positive Temperature Coefficient (PTC)', 'Linear Temperature Coefficient (LTC)'],
      answer: 'Negative Temperature Coefficient (NTC)',
    },
    {
      id: 2,
      question: 'How does the resistance of a thermistor vary with temperature?',
      options: ['Linearly', 'Exponentially', 'Inversely'],
      answer: 'Exponentially',
    },
    {
      id: 3,
      question: 'What is the purpose of a B-parameter equation in thermistor characterization?',
      options: ['To calculate the temperature coefficient', 'To model the resistance-temperature relationship', 'To determine the thermal conductivity'],
      answer: 'To model the resistance-temperature relationship',
    },
    {
      id: 4,
      question: 'What is the typical operating temperature range of a thermistor?',
      options: ['-50°C to 150°C', '-100°C to 100°C', '0°C to 200°C'],
      answer: '-50°C to 150°C',
    },
    {
      id: 5,
      question: 'What is the primary application of thermistors?',
      options: ['Temperature sensing and control', 'Pressure measurement', 'Humidity measurement'],
      answer: 'Temperature sensing and control',
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
      <h2>Post-Test</h2>
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
