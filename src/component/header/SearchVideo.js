import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, TextField, Autocomplete } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { data } from '../../testdata/youtube-data1';


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

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    // height: '100%',
    position: 'relative',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

function SearchVideo() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Search>
                <Autocomplete
                    options={data.items}
                    getOptionLabel={(option) => option.snippet.title}
                    disablePortal
                    id="combo-box-demo"
                    sx={{ input: { color: "white", }, width: '40ch', }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <SearchIconWrapper>
                    <SearchOutlinedIcon />
                </SearchIconWrapper>
            </Search>
        </Box>
    )
}

export default SearchVideo;