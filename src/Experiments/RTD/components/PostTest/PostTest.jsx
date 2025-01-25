import React, { useState } from 'react';
import "./PostTest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'How does the resistance of an RTD change with temperature?',
      options: ['It increases linearly', 'It decreases linearly', 'It remains constant'],
      answer: 'It increases linearly',
    },
    {
      id: 2,
      question: 'What is the primary principle behind RTDs?',
      options: ['Thermoelectric effect', 'Resistance-temperature relationship', 'Photoelectric effect'],
      answer: 'Resistance-temperature relationship',
    },
    {
      id: 3,
      question: 'Why is platinum commonly used in RTDs?',
      options: ['It has a higher resistance', 'It is cheaper than other materials', 'It has a linear resistance-temperature relationship'],
      answer: 'It has a linear resistance-temperature relationship',
    },
    {
      id: 4,
      question: 'What is the typical temperature range for RTD applications?',
      options: ['-200°C to 850°C', '-50°C to 150°C', '0°C to 100°C'],
      answer: '-200°C to 850°C',
    },
    {
      id: 5,
      question: 'What type of RTD configuration provides higher accuracy?',
      options: ['2-wire', '3-wire', '4-wire'],
      answer: '4-wire',
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
