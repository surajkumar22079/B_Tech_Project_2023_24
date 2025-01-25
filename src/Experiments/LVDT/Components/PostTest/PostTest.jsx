import React, { useState } from 'react';
import "./PostTest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the purpose of an LVDT?',
      options: ['To measure linear displacement', 'To measure voltage', 'To generate power'],
      answer: 'To measure linear displacement',
    },
    {
      id: 2,
      question: 'What is the output of an LVDT?',
      options: ['Current', 'Voltage', 'Resistance'],
      answer: 'Voltage',
    },
    {
      id: 3,
      question: 'How does an LVDT work?',
      options: ['By generating a magnetic field', 'By varying its resistance', 'By measuring changes in inductance'],
      answer: 'By measuring changes in inductance',
    },
    {
      id: 4,
      question: 'What is the construction of an LVDT?',
      options: ['It consists of a primary coil and two secondary coils', 'It consists of a single coil wound on a cylindrical core', 'It consists of multiple coils arranged in series'],
      answer: 'It consists of a primary coil and two secondary coils',
    },
    {
      id: 5,
      question: 'What type of signal conditioning is typically required for LVDT output?',
      options: ['Amplification', 'Attenuation', 'Filtering'],
      answer: 'Amplification',
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
      <h2>LVDT Post-Test</h2>
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
