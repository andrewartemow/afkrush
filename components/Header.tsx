import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import Container from './Container';

import { maxMobileWidth } from '../data';

const Header: FC = () => {
  // const [isMobile, setIsMobile] = useState(false);
  const [isShowedMenu, setIsShowedMenu] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth <= maxMobileWidth) {
  //     setIsMobile(true);
  //   }
  // }, []);

  return (
    <header className="w-full h-16 bg-white flex justify-center items-center shadow-md px-5 fixed z-50">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="font-bold">
            <Link href={'/'}>AFKRush.com</Link>
          </h1>
          <nav className="relative">
            <ul className="flex items-center max-[640px]:hidden">
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
            <div
              className="hidden space-y-2 cursor-pointer max-[640px]:block"
              onClick={() => setIsShowedMenu(!isShowedMenu)}
            >
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
            <div
              className={`flex w-36 h-36 bg-white absolute top-11 right-[-19px] shadow-md ${
                !isShowedMenu ? 'hidden' : ''
              }`}
            >
              <ul className="flex items-center flex-wrap justify-center">
                <Link
                  className="cursor-pointer px-4 py-3 bg-slate-300 rounded shadow-md"
                  href={'/about'}
                  onClick={() => {
                    setIsShowedMenu(false);
                  }}
                >
                  About us
                </Link>
                <Link
                  className="cursor-pointer px-4 py-3 bg-slate-300 rounded shadow-md"
                  href={'/contact'}
                  onClick={() => {
                    setIsShowedMenu(false);
                  }}
                >
                  Contacts
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
