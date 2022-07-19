import React from 'react'
import Navbar from '../header/Navbar';
import { useParams } from 'react-router-dom';
import ImageSample from './ImageSample';

function ImageDetails() {
    const { id } = useParams();
    return (
        <>
            <Navbar />
            <ImageSample />
        </>
    )
}

export default ImageDetails;