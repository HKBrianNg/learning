import React from 'react'
import Navbar from '../header/Navbar';
import { data } from '../../testdata/youtube-data1';
import { Container, Box, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

// const DisplayImage = ({ columns }) => {
//     let navigate = useNavigate();

//     const openImage = (id) => {
//         navigate(`/home/image/${id}`, { replace: true });
//     }

//     return (
//         <ImageList variant="masonry" cols={columns} gap={8}>
//             {data.items.map((item) => (
//                 <ImageListItem key={item.id.videoId} onClick={() => openImage(item.id.videoId)}>
//                     <img
//                         src={item.snippet.thumbnails.high.url}
//                         alt={item.snippet.title}
//                         loading="lazy"
//                     />
//                 </ImageListItem>
//             ))}
//         </ImageList>
//     );
// }


const DisplayCardImage = () => {
    let navigate = useNavigate();

    const openImage = (id) => {
        navigate(`/home/image/${id}`, { replace: true });
    }

    return (
        <>
            {data.items.map((item) => (
                <Card key={item.id.videoId} sx={{ maxWidth: 410, marginRight: 2 }} onClick={() => openImage(item.id.videoId)}>
                    <CardMedia
                        component="img"
                        width="320"
                        height="180"
                        image={item.snippet.thumbnails.medium.url}
                        alt={item.snippet.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.snippet.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.snippet.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </>
    );
}



function Home() {

    return (
        <>
            <Navbar />
            <Container maxWidth='xl'>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap' }}>
                    {/* <DisplayImage columns={4} /> */}
                    <DisplayCardImage />
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, flexWrap: 'wrap' }}>
                    <DisplayCardImage />
                </Box>
            </Container>

        </>

    );
}

export default Home;