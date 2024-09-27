import React, { useState } from 'react';

function Predict() {
  const [age, setAge] = useState('');
  const [answers, setAnswers] = useState(Array(15).fill(''));
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState('');

  // Array of question titles
  const questionTitles = [
    'How often does your child seem sad or down?',
    'Does your child get easily irritated or frustrated?',
    'How often does your child prefer to be alone?',
    'Does your child show less interest in things they used to enjoy?',
    'Does your child have trouble sleeping?',
    'How often does your child complain about feeling tired?',
    'Does your child seem clingy or need more attention than usual?',
    'Does your child have frequent aches or pains without a clear cause?',
    'How often does your child seem moody or emotional?',
    'Is your child more sensitive or reactive to things than usual?',
    'How often does your child struggle to focus or pay attention?',
    'Does your child have less energy than usual?',
    'How often does your child talk about feeling worthless or guilty?',
    'Does your child react strongly to small disappointments?',
    'How often does your child seem uninterested in school or learning?'
  ];

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    setError('');
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
    setError('');
  };

  const validateForm = () => {
    const ageInt = parseInt(age, 10);

    // Check if age is valid
    if (isNaN(ageInt) || ageInt < 4 || ageInt > 18) {
      setError('Please enter a valid age between 4 and 18.');
      return false;
    }

    // Check if all questions have been answered
    if (answers.includes('')) {
      setError('Please answer all the questions.');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    const ageInt = parseInt(age, 10);
    const payload = [ageInt, ...answers.map(answer => parseInt(answer))];

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      var data = await response.json();
      if (data === "0") {
        data = "Depression - Negative";
      } else {
        data = "Depression - Positive";
      }
      setPrediction(data);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <main id="content">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold lg:text-3xl lg:leading-tight dark:text-white">
            Predict your child’s depression
          </h2>
        </div>
        <div className="w-full sm:w-3/4 lg:w-2/6 mx-auto text-center mb-10">
          <div className="grid grid-cols-1 mt-5">
            <label htmlFor="hs-select-label" className="block text-sm font-medium mb-2 dark:text-white text-left">
              Age:
            </label>
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
              className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-60"
              placeholder="Enter your age"
            />
          </div>

          {Array.from({ length: 15 }, (_, index) => (
            <div className="grid grid-cols-1 mt-5" key={index}>
              <label for="hs-select-label" className="block text-sm font-medium mb-2 dark:text-white text-left">
                {questionTitles[index]}:
              </label>
              <div className="flex pt-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="0"
                  checked={answers[index] === '0'}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id={`question-${index}-a`}
                />
                <label htmlFor={`question-${index}-a`} className="text-sm text-gray-500 ms-2 dark:text-neutral-400">
                  A lot of the time
                </label>
              </div>
              <div className="flex pt-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="1"
                  checked={answers[index] === '1'}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id={`question-${index}-b`}
                />
                <label htmlFor={`question-${index}-b`} className="text-sm text-gray-500 ms-2 dark:text-neutral-400">
                  Sometimes
                </label>
              </div>
              <div className="flex pt-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="2"
                  checked={answers[index] === '2'}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id={`question-${index}-c`}
                />
                <label htmlFor={`question-${index}-c`} className="text-sm text-gray-500 ms-2 dark:text-neutral-400">
                  Rarely
                </label>
              </div>
              <div className="flex pt-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value="3"
                  checked={answers[index] === '3'}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id={`question-${index}-d`}
                />
                <label htmlFor={`question-${index}-d`} className="text-sm text-gray-500 ms-2 dark:text-neutral-400">
                  Not at all
                </label>
              </div>
            </div>
          ))}

          {error && (
            <div className="text-red-500 text-sm mt-3">
              {error}
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="my-5 w-full py-3 px-5 inline-flex items-center justify-center text-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-lime-400 text-black hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500"
          >
            Predict
          </button>

          {prediction && (
            <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-5">
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700">Prediction Result:</h2>
                <pre className="bg-gray-100 p-3 mt-3 text-gray-900 rounded-md">
                  {JSON.stringify(prediction, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Predict
