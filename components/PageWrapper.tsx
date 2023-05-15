import { FC, ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, className }) => {
  return (
    <div className={`min-h-screen px-5 py-16 ${className ? className : ''}`}>
      {children}
    </div>
  );
};

export default PageWrapper;
