import React, { useState } from 'react';
import logoImage from './assets/sorthat.png';
import Navbar from "./Navbar";

const questions = [
  {
    question: 'Which Deathly Hallow would you choose?',
    options: ['Invisibility Cloak', 'Elder Wand', 'Resurrection Stone', 'I wouldn\'t pursue any of them'],
  },
  {
    question: 'Which magical creature fascinates you the most?',
    options: ['Hippogriff', 'Basilisk', 'Niffler', 'Phoenix'],
  },
  {
    question: 'What quality do you value the most in a friend?',
    options: ['Bravery and loyalty', 'Ambition and cunning', 'Kindness and loyalty', 'Intellect and wit'],
  },
  {
    question: 'Which spell would you find most useful in everyday life?',
    options: ['Expelliarmus', 'Imperius', 'Alohomora', 'Lumos'],

  },
  {
    question: 'If you could choose one potion to master, which would it be?',
    options: ['Polyjuice Potion', 'Serpensortia', 'Felix Felicis', 'Wit-Sharpening Potion'],
  },
  {
    question: 'What is your preferred method of solving a problem?',
    options: ['Confront it head-on', 'Manipulate circumstances to your advantage', 'Collaborate with others', 'Analyze and find the most logical solution'],
  },
  {
    question: 'Which Quidditch position would you excel in?',
    options: ['Seeker', 'Chaser', 'Beater', 'Keeper'],
  },
  {
    question: 'What type of magical creature would you bring to Hogwarts as a pet?',
    options: ['A brave and loyal lion', 'A cunning and sly serpent', 'A friendly and hardworking badger', 'A wise and intelligent eagle'],
  },
  {
    question: 'Which Hogwarts subject do you find most intriguing?',
    options: ['Defense Against the Dark Arts', 'Potions', 'Care of Magical Creatures', 'Charms'],
  },
  {
    question: 'What is your favorite magical object?',
    options: ['Invisibility Cloak', 'Slytherins Locket', 'Hufflepuffs Cup', 'Ravenclaws Diadem'],
  },
];

const Sorting = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const handleOptionClick = (optionIndex) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestion] = optionIndex;
      return newAnswers;
    });
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setShowResults(false);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    setShowResults(false);
  };

  const calculateResults = () => {
    const optionCounts = Array(4).fill(0);

    answers.forEach((answer) => {
      if (answer !== null) {
        optionCounts[answer]++;
      }
    });

    const maxCount = Math.max(...optionCounts);
    const winningOption = optionCounts.indexOf(maxCount);

    return winningOption;
  };

  const handleShowResults = () => {
    const winningOption = calculateResults();

    let resultMessage = '';
    switch (winningOption) {
      case 0:
        resultMessage = 'You belong to Gryffindor!';
        break;
      case 1:
        resultMessage = 'You belong to Slytherin!';
        break;
      case 2:
        resultMessage = 'You belong to Hufflepuff!';
        break;
      case 3:
        resultMessage = 'You belong to Ravenclaw!';
        break;
      default:
        resultMessage = 'You belong to an unknown house!';
    }

    setShowResults(true);
    setResultMessage(resultMessage);
    showquizfunction();
  };

  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const isAnyOptionSelected = answers[currentQuestion] !== null;

  const [showQuiz, setShowQuiz] = useState(1);
  const showquizfunction=()=>{
    setShowQuiz(0);

  }

  return (
      <div>
        {showQuiz === 1 && (
            <div className="flex items-center bg-gray-900 justify-center h-screen">
              <Navbar />
              <div className="max-w-md h-500 w-96 pl-8 pr-8 pb-8 pt-2 bg-white shadow-md rounded-md overflow-y-auto flex flex-col">
                <img src={logoImage} alt="Logo" className="mx-auto h-20 w-20" />
                <div className="flex-1 bg-white flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">
                      {questions[currentQuestion].question}
                    </p>
                    {questions[currentQuestion].options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center mt-2">
                          <input
                              type="radio"
                              id={`q${currentQuestion}o${optionIndex}`}
                              name={`q${currentQuestion}`}
                              checked={answers[currentQuestion] === optionIndex}
                              onChange={() => handleOptionClick(optionIndex)}
                              className="mr-2"
                          />
                          <label htmlFor={`q${currentQuestion}o${optionIndex}`}>{option}</label>
                        </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <button
                          onClick={handlePrevious}
                          disabled={isFirstQuestion}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Previous
                      </button>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {isLastQuestion ? (
                          <button
                              onClick={handleShowResults}
                              disabled={!isAnyOptionSelected}
                              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Submit
                          </button>
                      ) : (
                          <button
                              onClick={handleNext}
                              disabled={!isAnyOptionSelected}
                              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Next
                          </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}
        {resultMessage === "You belong to Ravenclaw!" && (
            <div className="text-center h-screen bg-ravenclaw pt-64 text-white">
              <h1 className="text-4xl font-bold">Congratulations!</h1>
              <p className="mt-4 text-lg">You belong to Ravenclaw!</p>
              <p className="mt-4 text-lg">Additional content for Ravenclaw</p>
              <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-white text-black border border-ravenclaw hover:bg-ravenclaw-dark hover:text-white rounded-md transition-colors duration-300"
              >
                Reload
              </button>
            </div>
        )}
        {resultMessage === "You belong to Gryffindor!" && (
            <div className="text-center h-screen bg-gryffindor pt-64 text-white">
              <h1 className="text-4xl font-bold">Congratulations!</h1>
              <p className="mt-4 text-lg">You belong to Gryffindor!</p>
              <p className="mt-4 text-lg">Additional content for Gryffindor</p>
              <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-white text-black border border-gryffindor hover:bg-gryffindor-dark hover:text-white rounded-md transition-colors duration-300"
              >
                Reload
              </button>
            </div>
        )}
        {resultMessage === "You belong to Slytherin!" && (
            <div className="text-center h-screen bg-slytherin pt-64 text-white">
              <h1 className="text-4xl font-bold text-blue-500">Congratulations!</h1>
              <p className="mt-4 text-lg">You belong to Slytherin!</p>
              <p className="mt-4 text-lg">Additional content for Slytherin</p>
              <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-white text-black border border-slytherin hover:bg-slytherin-dark hover:text-white rounded-md transition-colors duration-300"
              >
                Reload
              </button>
            </div>
        )}
        {resultMessage === "You belong to Hufflepuff!" && (
            <div className="text-center h-screen bg-hufflepuff text-white pt-64">
              <h1 className="text-4xl font-bold">Congratulations!</h1>
              <p className="mt-4 text-lg">You belong to Hufflepuff!</p>
              <p className="mt-4 text-lg">Additional content for Hufflepuff</p>
              <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-white text-black border border-hufflepuff hover:bg-hufflepuff-dark hover:text-white rounded-md transition-colors duration-300"
              >
                Reload
              </button>
            </div>
        )}


      </div>
  );
};

export default Sorting;








