import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import PlatformButton from './PlatformButton';

import { IPlatform } from '../types';
import { filtersPlatforms } from '../data';

const Filters: FC = () => {
  const router = useRouter();
  const [platforms, setPlatforms] = useState<IPlatform[]>(
    filtersPlatforms.map((platform) => {
      return {
        name: platform,
        isActive: false,
      };
    })
  );

  useEffect(() => {
    const resetedPlatforms: IPlatform[] = platforms.map((platform) => {
      return {
        name: platform.name,
        isActive: false,
      };
    });
    setPlatforms(resetedPlatforms);
  }, []);

  const setActivePlatformHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    platforms.forEach((platform) => (platform.isActive = false));
    const newPlatforms = platforms.map((platform) => {
      if (platform.name === e.currentTarget.innerText) {
        platform.isActive = true;
        router.push(`?platform=${platform.name}`);
        return platform;
      }

      return platform;
    });
    setPlatforms(newPlatforms);
  };

  return (
    <div className="mx-auto flex w-full overflow-x-scroll">
      {platforms.map((platform) => (
        <PlatformButton
          key={platform.name}
          platform={platform}
          onSetActivePlatformHandler={setActivePlatformHandler}
        />
      ))}
    </div>
  );
};

export default Filters;
