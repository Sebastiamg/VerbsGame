import { useConfigStateContext } from '../hooks/useConfigStateContext';

export default function HomePage() {
  const contextConfigState = useConfigStateContext();

  const count = contextConfigState.verbs.reduce(
    (total, verbb) => {
      if (verbb.type === 'regular') {
        return { regulars: total.regulars + 1, irregulars: total.irregulars };
      } else {
        return { regulars: total.regulars, irregulars: total.irregulars + 1 };
      }
    },
    { regulars: 0, irregulars: 0 },
  );

  return (
    <>
      <h1>THIS IS THE HOME PAGE</h1>
      <pre>{JSON.stringify(count, null, 2)}</pre>
      <div className="p-20 flex flex-wrap gap-5">
        {contextConfigState.verbs.map((verb, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl border-2 border-gray-300 w-50 text-center">
            {verb.base_form}
          </div>
        ))}
      </div>
    </>
  );
}
