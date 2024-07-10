// src/components/Hero.tsx

import React from 'react';
import TokenRenderer from './TokenRenderer';
import { Line} from '../utils/tokens';
import heroData  from '../utils/heroData';
import Ascii from './Ascii';
import { cn } from '../utils/utils';
const Hero: React.FC = () => {
  return (
    <div>
      {/* //add justify start to make whole text move from top */}
        <div className={cn("w-screen lg:flex-row lg:w-[1150px] lg:mx-20 px-2 h-[90vh] justify-between items-center flex flex-col  lg:items-center  text-white md:mt-6")}>
          <div className='self-start' >
        <TokenRenderer lines={heroData as Line[]} />
          </div>
        <Ascii />
      </div>
    </div>
  );
};

export default Hero;
