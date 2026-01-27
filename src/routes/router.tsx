import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/HomePage';
import PageLayout from '../pages/layout/PageLayout';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => {
          return 'Welcome to the Home Page!';
          //   throw new Error('Data loading failed!');
        },
      },
      {
        path: 'hola',
        element: <h1>Hola</h1>,
      },
    ],
  },
]);
