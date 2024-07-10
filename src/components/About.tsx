import React from 'react';
import TokenRenderer from './TokenRenderer';
import { aboutData as aboutLines } from '../utils/aboutData';
import Picatchu from './Picatchu';
const About: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col h-[90vh] lg:mx-20 md:w-[700px] lg:w-[1150px] justify-between  md:flex-row items-center">
        <div className='flex-start'>
        <TokenRenderer lines={aboutLines} />
        </div>
        <div>
        <Picatchu />
        </div>
      </div>
    </div>
  );
};

export default About;
