import React, { useState } from 'react';
import "./PostTest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What happens to the output voltage of a potentiometer when a load is connected?',
      options: ['It increases', 'It decreases', 'It remains the same'],
      answer: 'It decreases',
    },
    {
      id: 2,
      question: 'What is the formula to calculate the error caused by connecting a load to a potentiometer?',
      options: ['\( E = \frac{V_e - V_0}{V_0} \)', '\( E = \frac{R_0}{R_t} \)', '\( E = \frac{R_0 R_m}{R_0 + R_m} \)'],
      answer: '\( E = \frac{V_e - V_0}{V_0} \)',
    },
    {
      id: 3,
      question: 'What does \( V_e \) represent in the formula for error caused by connecting a load?',
      options: ['Initial voltage', 'Effective voltage after connecting the load', 'Output voltage'],
      answer: 'Effective voltage after connecting the load',
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
