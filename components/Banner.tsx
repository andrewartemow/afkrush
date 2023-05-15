import { FC } from 'react';

import Image from 'next/image';
import bullet from '../public/kinbullet.gif';

const Banner: FC = () => {
  return (
    <div className="flex items-center">
      <div>
        <h1 className="text-5xl font-extrabold main-color">
          P<span className="third-color">i</span>xelBullet
        </h1>
        <h3 className="secondary-color">Find out what games are free now</h3>
      </div>

      <Image width={50} src={bullet} alt="no image :(" />
    </div>
  );
};

export default Banner;
