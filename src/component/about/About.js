import React, { useState } from 'react';
import Navbar from '../header/Navbar';
import { docData } from '../../data/docData';
import { Container, Box, Stack, Paper, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { grey } from '@mui/material/colors';

function About() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Navbar />
            <Container maxWidth='xl'>
                <Stack display='flex' direction='row'>
                    <Box sx={{ flex: 0.5, padding: 1 }}>
                        <Paper padding={3}>
                            <Typography variant="h4" gutterBottom component="div" align='center'>
                                <i>
                                    {docData.title}
                                </i>
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div" sx={{ paddingX: 2 }} >
                                {docData.summary}
                            </Typography>
                            <Typography variant='body1' gutterBottom component="div" sx={{ padding: 2, color: grey[600] }}>
                                <p>{docData.content}</p>
                            </Typography>
                        </Paper>
                    </Box>
                    <Box sx={{ flex: 0.5, padding: 1 }}>
                        {docData.items.map((item) => (
                            <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
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
                </Stack>
            </Container>
        </>
    );
}

export default About;