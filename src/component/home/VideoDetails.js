import React from 'react'
import Navbar from '../header/Navbar';
import { useParams } from 'react-router-dom';
import ReactPlayer from "react-player";
import { Container } from '@mui/material';
import './VideoDetails.css';

const youtubeUrl = "https://www.youtube.com/watch?v=";

function VideoDetails() {
    const { id } = useParams();
    const videoUrl = `${youtubeUrl}${id}`;

    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <div className='playerWrapper'>
                    <ReactPlayer className='react-player' controls={true} url={videoUrl} height="80%" width="100%" />
                </div>
            </Container>
        </>
    )
}

export default VideoDetails;