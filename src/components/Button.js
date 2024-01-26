import React from 'react'

const Button = ({ name }) => {
    return (
        <div className=' p-1 bg-gray-300 border rounded-lg px-3 mx-1 text-sm cursor-pointer mt-[4.5rem]'>
            {name}
        </div>
    )
}

export default Button