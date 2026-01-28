import type { VerbForm } from '../types/confi.type';
import { toTitleCase } from '../utils/functions.utils';

interface Props {
  verb: VerbForm;
}

export default function VerbCard({ verb }: Props) {
  return (
    <div className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      <div className="p-8 text-center">
        <div className="inline-block px-3 py-1 text-xs uppercase tracking-wider border border-gray-400 rounded-full mb-4">
          {toTitleCase(verb.type)}
        </div>

        <div className="text-center text-3xl mb-8">
          {verb.spanish_form.map(x => toTitleCase(x)).join(' / ')}
        </div>

        <div className="border-t border-gray-200 pt-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-800">Base form:</span>
            <span className="text-2xl">{toTitleCase(verb.base_form)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-800">Past:</span>
            <span className="text-2xl">
              {toTitleCase(verb.variation.past_form)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-800">Participle:</span>
            <span className="text-2xl">
              {toTitleCase(verb.variation.var_form)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
