import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";


const WatchPage = ({ info }) => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v");

    const [data, setdata] = useState();
    const VideoData = async () => {
        const data = await fetch(
            "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
            id +
            "&key=AIzaSyDKdGOS9jUqHhHqk1Zsyf67C1JqrsnYGq4"
        );
        const json = await data.json();

        setdata(json?.items[0]?.snippet);
    };
    console.log(data);
    useEffect(() => {
        VideoData();
    }, []);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);

    return (
        <div className="p-5 mt-[4rem]">
            <iframe
                width="1000"
                height="550"
                src={"https://www.youtube.com/embed/" + id}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <div className="flex flex-col mt-2 text-xl font-bold">{data?.title}</div>

        </div>
    );
};

export default WatchPage;
