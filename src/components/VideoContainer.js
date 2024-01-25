import React, { useEffect, useState } from 'react';
import YOUTUBE_VIDEOS_API from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';


const VideoContainer = () => {

  const [video, setVideo] = useState([]);

  const getVideoData = async () => {

    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideo(json.items);

  }

  useEffect(() => {
    getVideoData();
  }, [])

  return (
    <div className='flex flex-wrap'>
      {video.map((v) => (
        <Link key={v.id} to={"/watch?v=" + v.id}>
          <VideoCard info={v} />
        </Link>))}

    </div>
  )
}

export default VideoContainer