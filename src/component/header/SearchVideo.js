import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, TextField, Autocomplete, IconButton, Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { data } from '../../testdata/youtube-data1';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    border: "2px solid white",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        border: '2px solid white',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
}));


function SearchVideo() {
    const [videoId, setVideoId] = useState('');
    const navigate = useNavigate();

    const handleChange = (id) => {
        setVideoId(id);
    }

    const openVideo = () => {

        videoId && navigate(`/home/video/${videoId}`, { replace: true });
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Search>
                <Autocomplete
                    options={data.items}
                    getOptionLabel={(option) => option.snippet.title}
                    disablePortal
                    sx={{ input: { color: "white", }, width: '40ch', }}
                    onChange={(event, value) => handleChange(value.id.videoId)}
                    renderInput={(params) => <TextField {...params} />}
                />

                <Button onClick={openVideo}>
                    <SearchOutlinedIcon />
                </Button>
            </Search>

        </Box>
    )
}

export default SearchVideo;