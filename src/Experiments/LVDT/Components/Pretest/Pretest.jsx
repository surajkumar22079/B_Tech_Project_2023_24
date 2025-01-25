import React, { useState } from 'react';
import "./Pretest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What does LVDT stand for?',
      options: ['Linear Voltage Differential Transformer', 'Linear Variable Differential Transformer', 'Limited Variable Differential Transformer'],
      answer: 'Linear Variable Differential Transformer',
    },
    {
      id: 2,
      question: 'What is the primary function of an LVDT?',
      options: ['To measure linear displacement', 'To measure voltage', 'To generate power'],
      answer: 'To measure linear displacement',
    },
    {
      id: 3,
      question: 'What is the output of an LVDT?',
      options: ['Current', 'Voltage', 'Resistance'],
      answer: 'Voltage',
    },
    {
      id: 4,
      question: 'How does an LVDT convert mechanical displacement into electrical signals?',
      options: ['Through piezoelectric effect', 'Through capacitance variation', 'Through mutual inductance'],
      answer: 'Through mutual inductance',
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
