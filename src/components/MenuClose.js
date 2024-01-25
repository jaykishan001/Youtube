import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faHome, faMoneyBill, faMusic } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
const MenuClose = () => {
    return (
        <div>
            <div className='grid grid-flow-col'>
                <div className='flex gap-9 mt-6 flex-col  '>

                    <ul className='flex gap-7 flex-col '>
                        <Link to="/">
                            <li className=' flex flex-col items-start gap-2'>
                                <FontAwesomeIcon className='h-6 pl-5 ' icon={faHome} ></FontAwesomeIcon>
                                <span className='pl-4 text-sm'>Home</span>
                            </li>
                        </Link>
                        <li className=' flex flex-col items-start gap-2'>
                            <FontAwesomeIcon className='h-6 pl-5' icon={faYoutube}></FontAwesomeIcon>
                            <span className='pl-4 text-sm'>Shorts</span>
                        </li>
                        <li className=' flex flex-col items-start gap-2'>
                            <FontAwesomeIcon className='h-6 pl-5' icon={faMoneyBill} ></FontAwesomeIcon>
                            <span className='pl-2 text-sm'>Subscrip...</span> </li>
                        <li className=' flex flex-col items-start gap-2'>
                            <FontAwesomeIcon className='h-6 pl-5 ' icon={faMusic}> </FontAwesomeIcon>
                            <span className='pl-2 text-sm'>Youtube Mu...</span>
                        </li>
                        <li className=' flex flex-col items-start gap-2'>
                            <FontAwesomeIcon className='h-6 pl-5 ' icon={faDownload}> </FontAwesomeIcon>
                            <span className='pl-2 text-sm'>Downloads</span>
                        </li>
                    </ul>





                </div>
            </div>
            )
        </div >
    )
}

export default MenuClose