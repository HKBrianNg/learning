import React from 'react'
import Navbar from '../header/Navbar';
import { data } from '../../testdata/youtube-data1';
import { Container, Box, ImageList, ImageListItem } from '@mui/material';
import { useNavigate } from "react-router-dom";

const DisplayImage = ({ columns }) => {
    let navigate = useNavigate();

    const openImage = (id) => {
        navigate(`/home/image/${id}`, { replace: true });
    }

    return (
        <ImageList variant="masonry" cols={columns} gap={8}>
            {data.items.map((item) => (
                <ImageListItem key={item.id.videoId} onClick={() => openImage(item.id.videoId)}>
                    <img
                        src={item.snippet.thumbnails.high.url}
                        alt={item.snippet.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}


function Home() {

    return (
        <>
            <Navbar />
            <Container maxWidth='xl'>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <DisplayImage columns={4} />
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <DisplayImage columns={1} />
                </Box>
            </Container>

        </>

    );
}

export default Home;