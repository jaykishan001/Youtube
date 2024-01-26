import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
// import useVideoData from '../utils/useVideoData';

const WatchPage = ({ info }) => {

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());

    }, [dispatch])



    return (
        <div className='p-5 mt-[4rem]'>
            <iframe
                width="1000"
                height="550"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
            <div className='flex flex-col'>
                {/* {console.log(info.snippet.description)} */}
            </div>
        </div>
    )
}

export default WatchPage