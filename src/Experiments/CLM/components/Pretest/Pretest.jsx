import React, { useState } from 'react';
import "./Pretest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the principle behind Capacitive Level Measurement?',
      options: ['Piezoelectric effect', 'Capacitance-temperature relationship', 'Capacitance-distance relationship'],
      answer: 'Capacitance-distance relationship',
    },
    {
      id: 2,
      question: 'What type of sensor is commonly used in CLM?',
      options: ['Pressure sensor', 'Temperature sensor', 'Capacitive sensor'],
      answer: 'Capacitive sensor',
    },
    {
      id: 3,
      question: 'How does the dielectric constant of the material affect capacitance in CLM?',
      options: ['It has no effect', 'Higher dielectric constant increases capacitance', 'Higher dielectric constant decreases capacitance'],
      answer: 'Higher dielectric constant increases capacitance',
    },
    {
      id: 4,
      question: 'What is the purpose of a reference electrode in electrochemical measurements?',
      options: ['To measure resistance', 'To maintain a constant potential', 'To measure temperature'],
      answer: 'To maintain a constant potential',
    },
    {
      id: 5,
      question: 'What is the Nernst equation used to calculate in electrochemistry?',
      options: ['Rate of reaction', 'Concentration of ions', 'Cell potential'],
      answer: 'Cell potential',
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
