// import React, { useEffect, useState } from 'react';
// import YOUTUBE_VIDEOS_API from '../utils/constants';
import useVideoData from '../utils/useVideoData';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';



const VideoContainer = () => {


  const { video } = useVideoData();

  return (
    <div className='flex flex-wrap'>


      {video?.map((v) => (
        <Link key={v.id} to={"/watch?v=" + v.id} data={v}>
          <VideoCard info={v} />
        </Link>))}

    </div>
  )
}

export default VideoContainer