import React from 'react'
import Navbar from '../header/Navbar';
import { useParams } from 'react-router-dom';

function ImageDetails() {
    const { id } = useParams();
    return (
        <>
            <Navbar />
            <div>Image:{id}</div>
        </>
    )
}

export default ImageDetails;