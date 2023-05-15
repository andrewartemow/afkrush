import { FC } from 'react';
import { useRouter } from 'next/router';

import { IPlatform } from '../types';

interface PlatformButtonProps {
  platform: IPlatform;
  onSetActivePlatformHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PlatformButton: FC<PlatformButtonProps> = ({
  platform,
  onSetActivePlatformHandler,
}) => {
  const router = useRouter();

  return (
    <button
      className={`px-4 py-2 bg-slate-300 rounded m-2 hover:bg-slate-200 ${
        platform.isActive && router.asPath !== '/' ? 'bg-slate-400' : ''
      } whitespace-nowrap`}
      onClick={onSetActivePlatformHandler}
    >
      {platform.name}
    </button>
  );
};

export default PlatformButton;
