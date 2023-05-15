import { FC } from 'react';
import Link from 'next/link';
import Container from './Container';

const Header: FC = () => {
  return (
    <header className="w-full h-16 bg-white flex justify-center items-center shadow-md px-5 fixed z-50">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="font-bold">
            <Link href={'/'}>AFKRush.com</Link>
          </h1>
          <nav>
            <ul className="flex items-center">
              <Link
                className="ml-4 cursor-pointer px-4 py-3 bg-slate-300 rounded shadow-md"
                href={'/about'}
              >
                About us
              </Link>
              <Link
                className="ml-4 cursor-pointer px-4 py-3 bg-slate-300 rounded shadow-md"
                href={'/contact'}
              >
                Contacts
              </Link>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
