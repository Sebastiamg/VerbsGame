import type { VerbForm } from '../types/confi.type';
import { toTitleCase } from '../utils/functions.utils';

interface Props {
  verb: VerbForm;
  blurWords: boolean;
}

export default function VerbCard({ verb, blurWords }: Props) {
  const badgeColor =
    verb.type === 'regular'
      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
      : 'bg-gradient-to-r from-orange-500 to-red-500';

  const borderColor =
    verb.type === 'regular'
      ? 'border-green-300 hover:border-green-400'
      : 'border-orange-300 hover:border-orange-400';

  const bgColor = verb.type === 'regular' ? 'to-green-50' : 'to-orange-50';

  const dividerColor =
    verb.type === 'regular' ? 'border-green-200' : 'border-orange-200';

  const shadowColor =
    verb.type === 'regular'
      ? 'shadow-green-200/50 hover:shadow-green-300/70'
      : 'shadow-orange-200/50 hover:shadow-orange-300/70';

  const removeBlur = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.classList.remove('blur-xs');
  };

  return (
    <div
      className={`w-full h-[520px] md:h-[480px] flex flex-col border-[3px] ${borderColor} rounded-2xl overflow-hidden shadow-2xl ${shadowColor} hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 bg-gradient-to-br from-white ${bgColor} hover:-translate-y-1`}>
      <div className="p-4 md:p-5 text-center flex flex-col flex-1">
        <div
          className={`mx-auto w-fit md:w-2/5 inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest ${badgeColor} text-white rounded-full mb-4 md:mb-6 shadow-lg transform hover:scale-105 transition-transform duration-200`}>
          {toTitleCase(verb.type)}
        </div>

        {/* title */}
        <div className="text-center font-bold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 min-h-[120px] md:min-h-[96px] flex items-center justify-center px-2">
          <span className="text-3xl md:text-4xl leading-tight break-words">
            {verb.spanish_form.map(x => toTitleCase(x)).join(' / ')}
          </span>
        </div>

        <div
          className={`border-t-2 ${dividerColor} pt-4 md:pt-6 space-y-3 md:space-y-4 flex-1 flex flex-col justify-center`}>
          <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-colors duration-200">
            <span className="text-gray-700 font-semibold">Base form:</span>
            <span
              onClick={removeBlur}
              className={`text-2xl font-bold text-blue-600 cursor-pointer ${blurWords ? 'blur-xs' : ''}`}>
              {toTitleCase(verb.base_form)}
            </span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 transition-colors duration-200">
            <span className="text-gray-700 font-semibold">Past:</span>
            <span
              onClick={removeBlur}
              className={`text-2xl font-bold text-green-600 cursor-pointer ${blurWords ? 'blur-xs' : ''}`}>
              {toTitleCase(verb.variation.past_form)}
            </span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-orange-50 to-pink-50 hover:from-orange-100 hover:to-pink-100 transition-colors duration-200">
            <span className="text-gray-700 font-semibold">Participle:</span>
            <span
              onClick={removeBlur}
              className={`text-2xl font-bold text-orange-600 cursor-pointer ${blurWords ? 'blur-xs' : ''}`}>
              {toTitleCase(verb.variation.var_form)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
