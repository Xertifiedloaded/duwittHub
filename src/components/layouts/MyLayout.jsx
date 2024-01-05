import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../ui/footer/Footer';
import ContextApi from '../contextApi/ContextApi';
import Access from '../access/Access';
import Header from '../ui/header/Header';

export default function Layout({ children }) {
  const location = useLocation();
  return (
    <>
      <ContextApi>
        <Header />
        <Outlet />

        {location.pathname === '/academy' || location.pathname === '/' ? (
          <div
            className={`${location.pathname === '/academy' ? 'mt-0' : 'mt-[100px]'
              }`}
          >
            <Access />
          </div>

        ) : null}
        <Footer />
      </ContextApi>
    </>
  );
}
