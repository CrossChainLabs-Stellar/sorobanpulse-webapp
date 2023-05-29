import { Grid, Box } from '@mui/material';
// import { useState, useEffect } from 'react';
import Footer from './Footer';

import EcosystemGrowth from "./sections/EcosystemGrowth";
import ActiveProjects from "./sections/ActiveProjects";
import TopDevelopers from "./sections/TopDevelopers";
import ActiveDevelopers from "./sections/ActiveDevelopers";
import Developers from "./sections/Developers";
import Contributions from "./sections/Contributions";
import ProjectsTable from "./ProjectsTable";


export default function Dashboard() {

    return (
        <Box sx={{ marginX: '5rem' }}>
            <Grid container spacing={3}>

                <Grid item xs={12} md={3} lg={4}>
                    <EcosystemGrowth />
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <ActiveProjects />
                </Grid>

                <Grid item xs={12} md={3} lg={4}>
                    <TopDevelopers />
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <ActiveDevelopers />
                </Grid>

                <Grid item xs={12} md={3} lg={4}>
                    <Developers />
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <Contributions />
                </Grid>

                <Grid item xs={12} lg={12}>
                    <ProjectsTable />
                </Grid>

            </Grid>
            <Footer />
        </Box>
    );
}
