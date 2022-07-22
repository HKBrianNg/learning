import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { videoData } from '../../data/videoData';
import { useNavigate } from 'react-router-dom';


function VideoInfo() {
    let navigate = useNavigate();

    const openVideo = (id) => {
        navigate(`/home/video/${id}`, { replace: true });
    }

    return (
        <>
            {videoData.map((item) => (

                <Card key={item.videoId} sx={{ maxWidth: 400, padding: 2 }}>
                    <CardMedia
                        component="img"
                        height="180"
                        width="320"
                        image={item.thumbnailUrl}
                        alt={item.title}
                        onClick={() => openVideo(item.videoId)}
                    />
                    <CardHeader
                        avatar={<Avatar sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }}>Save</Avatar>}
                        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                        title={item.title}
                        subheader={item.publishedAt}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
        </>
    );
}



export default VideoInfo;