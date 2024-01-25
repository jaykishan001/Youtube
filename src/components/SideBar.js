import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHistory, faHouse, faMoneyBill, faMusic, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import MenuClose from './MenuClose';
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.menu.isMenuOpen);

  if (!isMenuOpen) return <MenuClose />;
  if (isMenuOpen === 2) return null;

  return (
    <div className='grid grid-flow-col'>
      <div className='flex gap-9 mt-6 flex-col  '>

        <ul className='flex gap-7 flex-col '>
          <li>
            <Link to="/">
              <FontAwesomeIcon className='h-6 pl-5 ' icon={faHouse} ></FontAwesomeIcon>
              <span className='pl-4 text-lg'>Home</span>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon className='h-6 pl-5' icon={faYoutube}></FontAwesomeIcon>
            <span className='pl-4 text-lg'>Shorts</span>
          </li>
          <li>
            <FontAwesomeIcon className='h-6 pl-5' icon={faMoneyBill} ></FontAwesomeIcon>
            <span className='pl-4 text-lg'>Subscriptions</span> </li>
          <li>
            <FontAwesomeIcon className='h-6 pl-5 ' icon={faMusic}> </FontAwesomeIcon>
            <span className='pl-4 text-lg'>Youtube Music</span>
          </li>
        </ul>

        <div className='h-[2px] ml-5 w-40 bg-gray-300'></div>

        <ul className='flex gap-7 flex-col '>
          <li>
            <FontAwesomeIcon className='h-6 pl-5 ' icon={faUser} ></FontAwesomeIcon>
            <span className='pl-4 text-lg'>Your Channel</span>
          </li>
          <li>
            <FontAwesomeIcon className='h-6 pl-5' icon={faHistory}></FontAwesomeIcon>
            <span className='pl-4 text-lg'>Histroy</span>
          </li>
          <li>
            <FontAwesomeIcon className='h-6 pl-5' icon={faVideo} ></FontAwesomeIcon>
            <span className='pl-4 text-lg'>Videos</span> </li>
          <li>
            <FontAwesomeIcon className='h-6 pl-5 ' icon={faDownload}> </FontAwesomeIcon>
            <span className='pl-4 text-lg'>Downloads</span>
          </li>
        </ul>


      </div>
    </div>
  )
}
export default SideBar;