import { useState, useEffect } from 'react';
import YOUTUBE_VIDEOS_API from './constants';

const useVideoData = () => {

    const [video, setVideo] = useState([]);

    const getVideoData = async () => {

        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideo(json.items);

    }

    useEffect(() => {
        getVideoData();
    }, [])


    return {
        video, setVideo
    }
}

export default useVideoData;