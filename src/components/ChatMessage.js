import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const ChatMessage = ({ name, text }) => {
    return (
        <div className='flex items-center pt-2 '>
            <FontAwesomeIcon className='border border-black p-1 rounded-full' icon={faUser}></FontAwesomeIcon>
            <h3 className='pl-2 text-lg'>{name}</h3>
            <h4 className='text-lg font-thin'>{text}</h4>
        </div>
    )
}

