import { Outlet } from 'react-router';
import Header from './components/Header';

export default function PageLayout() {
  return (
    <div className="font-monserrat">
      <Header />
      <main>
        <Outlet />
      </main>
      <div>Footer</div>
    </div>
  );
}
