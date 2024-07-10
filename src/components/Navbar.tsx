import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoLogoJavascript } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { cn } from '../utils/utils';
import { useAppContext } from '../context/portfolioContext';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";


const Navbar: React.FC = () => {
  const { aboutActive, projectsActive, setAboutActive, setProjectsActive } = useAppContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = location.pathname;

  const handleToggleActive = (tab: 'about' | 'projects') => {
    if (tab === 'about') {
      setAboutActive(prev => !prev);
    } else if (tab === 'projects') {
      setProjectsActive(prev => !prev);
    }
    navigate('/');
  };

  const handleResponsive = () => {
    setToggleMenu(prev => !prev);
  };

  return (
    <div className="bg-[#1F242F] items-start sm:items-center flex flex-col sm:flex-row  transition-all duration-300 ease-in z-10">
      <div className="menuItems flex h-[40px] justify-center items-center gap-2 ml-6">
        <div className="dot1 w-4 h-4 rounded-full bg-red-500"></div>
        <div className="dot1 w-4 h-4 rounded-full bg-yellow-500"></div>
        <div className="dot1 w-4 h-4 rounded-full bg-green-500"></div>
        {toggleMenu ? <FaChevronUp onClick={handleResponsive} className='ml-3 text-gray-400 mt-1 sm:hidden cursor-pointer' /> : <FaChevronDown onClick={handleResponsive} className='ml-3 text-gray-400 mt-1 sm:hidden cursor-pointer' />}
      </div>
      <div className={cn(
        "innerNav pt-3 sm:pt-0 sm:flex w-full sm:w-auto justify-start gap-2 items-end pl-5 transition-all duration-300 ease-in  sm:pl-0 sm:ml-5",
        {
          "opacity-100 max-h-[150px] sm:max-h-none": toggleMenu || window.innerWidth >= 640, // Ensure a large enough max-height for the expanded state
          "opacity-0 max-h-0 sm:opacity-100 sm:max-h-none": !toggleMenu && window.innerWidth < 640
        }
      )}>
        {/* Home link */}
        <div className="bg-[#0D0F14] flex mt-2 sm:mt-0 rounded-md sm:rounded-t-md items-center px-2 w-[120px] mb-2 sm:mb-0">
          <div onClick={() => navigate('/')} className={cn("link-container flex w-[90px] items-center gap-2 h-[30px] text-gray-400 rounded-t-md", activeTab === "/" && "text-gray-400")}>
            <IoLogoJavascript className="text-yellow-500 cursor-pointer" />
            <p className="cursor-pointer">home.js</p>
          </div>
        </div>

        {/* About link */}
        <div className={cn('bg-[#0D0F14] flex mt-2 sm:mt-0 sm:rounded-t-md items-center px-2 w-[150px] self-start mb-2 sm:mb-0', !aboutActive && 'hidden')}>
          <div onClick={() => navigate('/about')} className={cn("link-container flex w-[120px] items-center gap-2 h-[30px] text-gray-400 rounded-t-md", activeTab === "/about" && "text-gray-400")}>
            <IoLogoJavascript className="text-yellow-500 cursor-pointer" />
            <p className="cursor-pointer">about.js</p>
          </div>
          <RxCross2 className="text-gray-400 cursor-pointer" onClick={() => handleToggleActive('about')} />
        </div>

        {/* Projects link */}
        <div className={cn('bg-[#0D0F14] flex mt-2 sm:mt-0 rounded-md sm:rounded-t-md items-center px-2 gap-2 w-[150px] mb-2 sm:mb-0', !projectsActive && 'hidden')}>
          <div onClick={() => navigate('/projects')} className={cn("link-container flex  items-center gap-2 h-[30px] text-gray-400 rounded-t-md", activeTab === "/projects" && "text-gray-400")}>
            <IoLogoJavascript className="text-yellow-500 cursor-pointer" />
            <p className="cursor-pointer">projects.js</p>
          </div>
          <RxCross2 className="text-gray-400 cursor-pointer" onClick={() => handleToggleActive('projects')} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
