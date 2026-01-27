import { useRouteError } from 'react-router';

export default function NotFoundPage() {
  const error = useRouteError() as Error;

  return (
    <>
      <h1>ERROR</h1>
      <h3>MSG: {error.message}</h3>
    </>
  );
}
