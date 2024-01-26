import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SUGGESTION_API } from '../utils/constants'
import { Searc } from 'react-router-dom'
import { cacheResult } from '../utils/searchSlice'


const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {

    dispatch(toggleMenu())

  }
  const [serachQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(true);


  const searchCache = useSelector((store) => store.search);

  useEffect(() => {

    const timer = setTimeout(() => {
      if (searchCache[serachQuery]) {
        return setSuggestion(searchCache[serachQuery]);
      }
      else {
        // if not present in cache we need to dispatch it 
        suggestData();
      }
      suggestData();
    }, 200);

    return () => {

      clearTimeout(timer);

    }
  }, [serachQuery])

  const suggestData = async () => {

    const data = await fetch(YOUTUBE_SUGGESTION_API + serachQuery);
    const json = await data.json();
    setSuggestion(json[1]);

    dispatch(cacheResult({
      [serachQuery]: json[1],
    }));


  }




  return (
    <div className='grid grid-flow-col h-16 place-items-start shadow-lg w-[100%] bg-white fixed '>
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

        <input className='w-[32rem] border border-gray-500  rounded-l-full p-1 pl-4'
          type="text"
          value={serachQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />

        <button
          className='border border-gray-500 text-center rounded-r-full p-1 bg-gray-200 pl-2 pr-2'>
          <FontAwesomeIcon
            className='px-3'
            icon={faSearch}></FontAwesomeIcon>
        </button>

        {showSuggestion && <div className='fixed bg-white w-[32rem] border border-gray-200 rounded-md mt-3'>
          <ul>
            {suggestion.map((v) => (<li key="v" className='pb-3 px-2 hover:bg-gray-300'>
              <FontAwesomeIcon icon={faSearch} className='pr-2'></FontAwesomeIcon>
              {v}
            </li>))}
          </ul>
        </div>}

      </div>

      <div className='col-span-1'>
        <img className='h-10 border-2 border-gray-800 rounded-full mt-2.5 center  '
          alt="userLogo"
          src='https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' />
      </div>

    </div>
  )
}

export default Head;