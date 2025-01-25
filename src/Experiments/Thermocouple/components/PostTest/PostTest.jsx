import React, { useState } from 'react';
import "./PostTest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the Seebeck effect?',
      options: ['The phenomenon where a voltage is generated at the junction of two dissimilar metals', 'The phenomenon where a current is generated at the junction of two dissimilar metals', 'The phenomenon where heat is generated at the junction of two dissimilar metals'],
      answer: 'The phenomenon where a voltage is generated at the junction of two dissimilar metals',
    },
    {
      id: 2,
      question: 'Which type of thermocouple is commonly used in high-temperature applications?',
      options: ['Type K', 'Type J', 'Type T'],
      answer: 'Type K',
    },
    {
      id: 3,
      question: 'What is the reference temperature for Type K thermocouples?',
      options: ['0°C', '25°C', '100°C'],
      answer: '0°C',
    },
    {
      id: 4,
      question: 'What is the typical temperature range of a Type T thermocouple?',
      options: ['-200°C to 350°C', '-50°C to 500°C', '0°C to 100°C'],
      answer: '-200°C to 350°C',
    },
    {
      id: 5,
      question: 'What is the primary advantage of using a thermocouple for temperature measurement?',
      options: ['Wide temperature range', 'High sensitivity', 'Low cost'],
      answer: 'Wide temperature range',
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
