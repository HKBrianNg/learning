import React from 'react'
import Navbar from '../header/Navbar';
import { Container, Box } from '@mui/material';
import VideoInfo from './VideoInfo';


function Home() {

    return (
        <>
            <Navbar />
            <Container maxWidth='xl'>
                <Box sx={{ flexGrow: 1, padding: 1, display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap' }}>
                    <VideoInfo />
                </Box>
                <Box sx={{ flexGrow: 1, padding: 1, display: { xs: 'flex', md: 'none' }, flexWrap: 'wrap' }}>
                    <VideoInfo />
                </Box>
            </Container>

        </>

    );
}

export default Home;