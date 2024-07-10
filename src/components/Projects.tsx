// src/components/Projects.tsx

import React from 'react';
import TokenRenderer from './TokenRenderer';
import { Line } from '../utils/tokens'; // Assuming Line interface is defined in tokens file
import projectsData from '../utils/projectsData';


const Projects: React.FC = () => {
  return (
    <div>
      <div className="w-screen flex flex-col text-white h-full lg:mx-20 justify-start p-3" >
        <div className='h-[150vh] justify-center items-center'>

        <TokenRenderer lines={projectsData as Line[]} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
