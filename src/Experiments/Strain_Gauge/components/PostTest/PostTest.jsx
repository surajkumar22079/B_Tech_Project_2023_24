import React, { useState } from 'react';
import "./PostTest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the most common material used in strain gauge construction?',
      options: ['Copper', 'Aluminum', 'Nichrome'],
      answer: 'Nichrome',
    },
    {
      id: 2,
      question: 'What is the temperature coefficient of resistance (TCR) of a strain gauge?',
      options: ['It decreases with temperature', 'It increases with temperature', 'It remains constant with temperature'],
      answer: 'It remains constant with temperature',
    },
    {
      id: 3,
      question: 'What is the purpose of using a Wheatstone bridge with a strain gauge?',
      options: ['To amplify the signal', 'To compensate for temperature changes', 'To convert resistance changes into voltage'],
      answer: 'To convert resistance changes into voltage',
    },
    {
      id: 4,
      question: 'What is the typical gauge factor of a strain gauge?',
      options: ['Less than 1', 'Equal to 1', 'Greater than 1'],
      answer: 'Greater than 1',
    },
    {
      id: 5,
      question: 'What is the typical resistance value of a strain gauge?',
      options: ['100 ohms', '1000 ohms', '10000 ohms'],
      answer: '1000 ohms',
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
