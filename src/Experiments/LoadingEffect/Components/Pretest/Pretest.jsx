import React, { useState } from 'react';
import "./Pretest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the loading effect on a potentiometer?',
      options: ['Change in resistance', 'Change in output voltage', 'Effect of connected load'],
      answer: 'Effect of connected load',
    },
    {
      id: 2,
      question: 'How does the input impedance of a connected device affect the potentiometer?',
      options: ['It decreases the current', 'It affects the current between the sliding contact and end terminal', 'It has no effect'],
      answer: 'It affects the current between the sliding contact and end terminal',
    },
    {
      id: 3,
      question: 'What is the formula to calculate the effective resistance after connecting a load to a potentiometer?',
      options: ['\( R_e = \frac{R_0 R_m}{R_0 + R_m} \)', '\( R_e = \frac{R_0}{R_t} \)', '\( R_e = \frac{R_t - R_0}{R_0 + R_m} \)'],
      answer: '\( R_e = \frac{R_0 R_m}{R_0 + R_m} \)',
    },
    {
      id: 4,
      question: 'What is the role of the wiper in a potentiometer?',
      options: ['To control the current flow', 'To measure resistance', 'To adjust the voltage division ratio'],
      answer: 'To adjust the voltage division ratio',
    },
    {
      id: 5,
      question: 'What is the primary application of a potentiometer?',
      options: ['To measure resistance', 'To control the voltage', 'To provide variable voltage or resistance'],
      answer: 'To provide variable voltage or resistance',
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
