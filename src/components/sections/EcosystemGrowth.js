/** @module TopContributors **/
//import { useState, useEffect } from 'react';
import { Box, Stack, Card, Typography, CardHeader, Link } from '@mui/material';


function EcosystemGrowth() {

    return (
        <Card sx={{ marginTop: '3rem', boxShadow: 4 }}>
            <CardHeader title="Ecosystem growth" />
            <Stack spacing={5.37} sx={{ p: 5.4, pr: 0, height: '25.5rem', overflowY: 'scroll' }}>
                <Typography>item1</Typography>
                <Typography>item2</Typography>
                <Typography>item3</Typography>
            </Stack>
        </Card>
    );
}

export default EcosystemGrowth;
