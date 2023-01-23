import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {
    Toolbar,
    Tooltip,
    IconButton,
    Typography,
    OutlinedInput,
    InputAdornment,
    Stack,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Button,
} from '@mui/material';
import Calendar from 'react-awesome-calendar';

const EventCalendar = () => {

    const events = [{
        id: 1,
        color: '#fd3153',
        from: '2023-02-02T18:00:00+00:00',
        to: '2023-02-02T19:00:00+00:00',
        title: 'This is an event'
    }, {
        id: 2,
        color: '#1ccb9e',
        from: '2023-02-02T13:01:00+00:00',
        to: '2023-02-02T14:00:00+00:00',
        title: 'This is another event'
    }, {
        id: 3,
        color: '#3694DF',
        from: '2023-02-02T13:00:00+00:00',
        to: '2023-02-02T20:00:00+00:00',
        title: 'This is also another event'
    }];

    return (
        <>
            <Box sx={{ paddingLeft: "24px", paddingRight: "24px" }}>
                <Typography variant='h5' sx={{ paddingBottom: "15px" }}>Event Calendar</Typography>
                <Box sx={{ background: "white", borderRadius: "13px", padding: "15px" }}>
                    <Calendar
                        events={events}
                    />
                </Box>
            </Box>
        </>
    );
}

export default EventCalendar;