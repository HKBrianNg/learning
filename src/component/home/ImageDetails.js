import React from 'react'
import Navbar from '../header/Navbar';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../videoplayer/VideoPlayer';


function ImageDetails() {
    const { id } = useParams();
    return (
        <>
            <Navbar />
            <VideoPlayer videoID={id} />
        </>
    )
}

export default ImageDetails;