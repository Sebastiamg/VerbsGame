import { useState } from 'react';
import VerbCard from '../components/VerbCard';
import { useConfigStateContext } from '../hooks/useConfigStateContext';
import { randomArr } from '../utils/functions.utils';

export default function HomePage() {
  const contextConfigState = useConfigStateContext();
  const sortedVerbs = randomArr(contextConfigState.verbs);

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
        <VerbCard verb={sortedVerbs[verbsArrIndex]} />
        <div className="w-full flex rounded-lg overflow-hidden border border-gray-300">
          <button
            onClick={() => prevNextVerb('prev')}
            className="w-1/2 p-4 bg-slate-300  border-r-gray-300 hover:bg-gray-50 transition-colors">
            Previous
          </button>
          <button
            onClick={() => prevNextVerb('next')}
            className="w-1/2 p-4 bg-slate-400  border-l-gray-300 hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
