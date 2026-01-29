import { useState } from 'react';
import VerbCard from '../components/VerbCard';
import { useConfigStateContext } from '../hooks/useConfigStateContext';
import { randomArr } from '../utils/functions.utils';

export default function HomePage() {
  const contextConfigState = useConfigStateContext();
  const sortedVerbs = randomArr(contextConfigState.verbs).filter(verb => {
    if (
      !contextConfigState.onlyRegulars &&
      !contextConfigState.onlyIrregulars
    ) {
      return verb;
    } else if (contextConfigState.onlyRegulars) {
      return verb.type === 'regular';
    } else if (contextConfigState.onlyIrregulars) {
      return verb.type === 'irregular';
    }
  });

  const [verbsArrIndex, setVerbsArrIndex] = useState(0);

  const prevNextVerb = (type: 'prev' | 'next') => {
    setVerbsArrIndex(prev => {
      if (type === 'prev') {
        const prevNum = prev - 1;
        return prevNum < 0 ? sortedVerbs.length - 1 : prevNum;
      } else {
        return prev + 1 > sortedVerbs.length - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <>
      <div className="p-10 md:w-2/5 flex flex-wrap gap-5 w-full mx-auto">
        <VerbCard
          key={verbsArrIndex}
          verb={sortedVerbs[verbsArrIndex]}
          blurWords={contextConfigState.blurVerbs}
        />
        <div className="w-full flex gap-4">
          <button
            onClick={() => prevNextVerb('prev')}
            className="flex-1 py-3 px-6 font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-purple-300 hover:text-purple-600 transition-all duration-200">
            <span className="inline-flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Previous
            </span>
          </button>
          <button
            onClick={() => prevNextVerb('next')}
            className="flex-1 py-3 px-6 font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-pink-300 hover:text-pink-600 transition-all duration-200">
            <span className="inline-flex items-center gap-2">
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
