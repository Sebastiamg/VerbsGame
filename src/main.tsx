import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './routes/router.tsx';
import { ConfigContextProvider } from './context/configContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigContextProvider>
      <RouterProvider router={router} />
    </ConfigContextProvider>
  </StrictMode>,
);
