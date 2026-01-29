import { Outlet } from 'react-router';
import Header from './components/Header';

export default function PageLayout() {
  return (
    <div className="font-monserrat select-none">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
