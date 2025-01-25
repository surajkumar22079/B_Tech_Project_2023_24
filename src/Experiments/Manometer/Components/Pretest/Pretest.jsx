import React, { useState } from 'react';
import "./Pretest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the principle behind a manometer?',
      options: ['Hydrostatic pressure', 'Thermal expansion', 'Electrical conductivity'],
      answer: 'Hydrostatic pressure',
    },
    {
      id: 2,
      question: 'What is the purpose of using a manometer?',
      options: ['To measure temperature', 'To measure pressure', 'To measure voltage'],
      answer: 'To measure pressure',
    },
    {
      id: 3,
      question: 'What are the common types of manometers?',
      options: ['U-tube, Inclined, and Differential', 'Vapor, Mercury, and Electronic', 'Rectangular, Circular, and Triangular'],
      answer: 'U-tube, Inclined, and Differential',
    },
    {
      id: 4,
      question: 'How does a U-tube manometer work?',
      options: ['By measuring the volume of gas', 'By measuring the height difference of liquid columns', 'By measuring the temperature change'],
      answer: 'By measuring the height difference of liquid columns',
    },
    {
      id: 5,
      question: 'What is the advantage of using an inclined manometer?',
      options: ['It can measure small pressure differences with high accuracy', 'It is less prone to errors caused by temperature changes', 'It requires less maintenance compared to other types'],
      answer: 'It can measure small pressure differences with high accuracy',
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
