import { FC, ReactNode } from 'react';

interface SubTitleProps {
  children: ReactNode;
  className?: string;
}

const SubTitle: FC<SubTitleProps> = ({ children, className }) => {
  return (
    <h2
      className={`text-center font-semibold text-slate-900 ${
        className ? className : ''
      }`}
    >
      {children}
    </h2>
  );
};

export default SubTitle;
