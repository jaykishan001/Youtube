import React from 'react'

const VideoCard = ({ info }) => {

    const { snippet, statistics } = info || {};
    const { channelTitle, title, thumbnails } = snippet || {};


    function formatNumber(number) {
        if (isNaN(number)) {
            return "Invalid Number";
        }

        if (number >= 1000000000) {

            return (number / 1000000000).toFixed(1) + "B";

        } else if (number >= 1000000) {

            return (number / 1000000).toFixed(1) + "M";

        } else if (number >= 100000 || number >= 1000) {

            return (number / 1000).toFixed(1) + "k";
        }
        else {
            return number.toString();
        }
    }


    return (
        <div className='p-1 w-90 ml-4 mt-4 space-l-3 cursor-pointer'>
            <img
                className='md:w-[25rem] rounded-lg'
                src={thumbnails?.medium?.url}
                alt="thumbnails" />

            <ul className='md:w-[25rem]'>

                <li className='font-bold'>{title}</li>
                <li className='text-s'>{channelTitle}</li>
                <li>{formatNumber(statistics.viewCount)}</li>

            </ul>

        </div >
    )
}

export default VideoCard;