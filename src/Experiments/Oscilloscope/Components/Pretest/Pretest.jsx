import React, { useState } from 'react';
import "./Pretest.css"

const LVDTPostTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the primary function of an oscilloscope?',
      options: ['To measure voltage', 'To measure temperature', 'To measure frequency'],
      answer: 'To measure voltage',
    },
    {
      id: 2,
      question: 'What is the display screen of an oscilloscope called?',
      options: ['Cathode ray tube (CRT)', 'Liquid crystal display (LCD)', 'LED screen'],
      answer: 'Cathode ray tube (CRT)',
    },
    {
      id: 3,
      question: 'What is the purpose of the time base control on an oscilloscope?',
      options: ['To adjust voltage amplitude', 'To adjust horizontal time scale', 'To adjust trigger level'],
      answer: 'To adjust horizontal time scale',
    },
    {
      id: 4,
      question: 'What is the function of the trigger control on an oscilloscope?',
      options: ['To start and stop the display of waveforms', 'To adjust the brightness of the display', 'To change the vertical scale'],
      answer: 'To start and stop the display of waveforms',
    },
    {
      id: 5,
      question: 'What is the typical frequency range of an oscilloscope?',
      options: ['Megahertz (MHz) to Gigahertz (GHz)', 'Kilohertz (kHz) to Megahertz (MHz)', 'Hertz (Hz) to Kilohertz (kHz)'],
      answer: 'Hertz (Hz) to Kilohertz (kHz)',
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
      <h2> Pre-Test</h2>
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
