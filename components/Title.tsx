import { FC, ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  className?: string;
}

const Title: FC<TitleProps> = ({ children, className }) => {
  return (
    <h1
      className={`text-xl font-semibold text-slate-900 text-center ${
        className ? className : ''
      }`}
    >
      {children}
    </h1>
  );
};

export default Title;
