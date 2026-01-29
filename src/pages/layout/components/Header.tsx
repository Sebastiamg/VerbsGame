import {
  useConfigDispatchContext,
  useConfigStateContext,
} from '../../../hooks/useConfigStateContext';
import type { VerbType } from '../../../types/confi.type';

export default function Header() {
  const dispatch = useConfigDispatchContext();
  const state = useConfigStateContext();

  function handleOnlyReIrreChange(type: VerbType) {
    dispatch({
      type: type === 'regular' ? 'SET_ONLY_REGULARS' : 'SET_ONLY_IRREGULARS',
      payload: {
        value: type === 'regular' ? !state.onlyRegulars : !state.onlyIrregulars,
      },
    });
  }

  function handleBlurVerbsChange() {
    dispatch({
      type: 'BLUR_VERB',
      payload: { value: !state.blurVerbs },
    });
  }

  return (
    <div className="py-3 px-4 md:px-6 w-full flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between items-center bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 border-b-2 border-purple-200 shadow-sm">
      <div className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
        Learn Verbs
      </div>

      {/* Config */}
      <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
        <label className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 rounded-lg bg-white border border-green-300 hover:border-green-400 transition-all duration-200 cursor-pointer group">
          <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors whitespace-nowrap">
            Regulars
          </span>
          <input
            type="checkbox"
            checked={state.onlyRegulars}
            onChange={() => handleOnlyReIrreChange('regular')}
            className="w-4 h-4 accent-green-500 cursor-pointer"
          />
        </label>

        <label className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 rounded-lg bg-white border border-orange-300 hover:border-orange-400 transition-all duration-200 cursor-pointer group">
          <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors whitespace-nowrap">
            Irregulars
          </span>
          <input
            type="checkbox"
            checked={state.onlyIrregulars}
            onChange={() => handleOnlyReIrreChange('irregular')}
            className="w-4 h-4 accent-orange-500 cursor-pointer"
          />
        </label>

        <label className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 rounded-lg bg-white border border-purple-300 hover:border-purple-400 transition-all duration-200 cursor-pointer group">
          <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors whitespace-nowrap">
            Blur
          </span>
          <input
            type="checkbox"
            checked={state.blurVerbs}
            onChange={handleBlurVerbsChange}
            className="w-4 h-4 accent-purple-500 cursor-pointer"
          />
        </label>
      </div>
    </div>
  );
}
