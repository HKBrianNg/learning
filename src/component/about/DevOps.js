import React, { useState } from 'react';
import { data } from '../../data/DevOpsData';
import { Container, Box, Stack, Paper, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { grey } from '@mui/material/colors';
import VideoInfo from '../video/VideoInfo';


function DevOps() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <>
            <Container maxWidth='xl'>
                <Stack display='flex' direction={{ xs: 'column', md: 'row' }} >
                    <Box sx={{ flex: 1, padding: 1 }}>
                        <Paper padding={3}>
                            <Typography variant="h4" gutterBottom component="div" align='center'>
                                <i>
                                    {data.title}
                                </i>
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div" sx={{ paddingX: 2 }} >
                                {data.summary}
                            </Typography>
                            <Typography variant='body1' gutterBottom component="div" sx={{ padding: 2, color: grey[600] }}>
                                <p>{data.content}</p>
                            </Typography>
                        </Paper>
                    </Box>
                    <Box sx={{ flex: 1, padding: 1 }}>
                        {data.items.map((item) => (
                            <Accordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>{item.summary}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {item.content}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))};
                    </Box>
                    <Box sx={{ flex: 1, padding: 1, height: 700, overflow: "hidden", overflowY: "scroll" }}>
                        <VideoInfo filter={{ category: 'IT', subCategory: 'DevOps' }} />
                    </Box>
                </Stack>
            </Container>
        </>
    );
}

export default DevOps;