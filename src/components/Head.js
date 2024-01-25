import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'



const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {

    dispatch(toggleMenu())

  }




  return (
    <div className='grid grid-flow-col h-16 place-items-start shadow-lg'>
      <div className='flex col-span-1 mx-3 items-center'>

        <FontAwesomeIcon className='h-6 pr-2.5 pl-3 cursor-pointer'
          icon={faBars}
          onClick={() => toggleMenuHandler()}
        >
        </FontAwesomeIcon>

        <img className="h-14 mt-1"
          alt="youtubeLogo"
          src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg' />
      </div>

      <div className='col-span-10 p-4 pl-[16rem]'>
        <input className='w-[32rem] border border-gray-500  text-center  rounded-l-full p-1' type="text" />
        <button className='border border-gray-500 text-center rounded-r-full p-1 bg-gray-200 pl-2 pr-2'>
          <FontAwesomeIcon className='px-3' icon={faSearch}></FontAwesomeIcon>
        </button>
      </div>

      <div className='col-span-1'>
        <img className='h-10 border-2 border-gray-800 rounded-full mt-2.5 center  ' alt="userLogo" src='https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' />
      </div>

    </div>
  )
}

export default Head;