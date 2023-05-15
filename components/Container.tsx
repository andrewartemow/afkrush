import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="container container-manual mx-auto">{children}</div>;
};

export default Container;
