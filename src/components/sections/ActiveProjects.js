/** @module EcosystemChart **/
import merge from 'lodash/merge';
// import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box, Typography, Stack } from '@mui/material';
import { CustomChart } from '../chart'

/**
 * Line chart that displays the number of active developers and active repositories for each month over the last year.
 */
function ActiveProjects() {
    const chartOptions = merge(CustomChart(), {
         xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan'],
        },
        colors: ["#FFDF42", "#3E3385"],
        // stroke: {
        //   width: 2,
        //   colors: ["#F15A24", '#F2C1B0'],
        // },
        markers: {
            colors: ["#FFDF42", "#3E3385"],
            strokeColors: ["#FFDF42", "#3E3385"],
        },
    });

    return (
        <Card
            sx={{
                marginTop: '3rem',
                boxShadow: '0px 4px 4px 0px #00000040'
            }}
        >
            <CardHeader title={
                <Stack direction='column'>
                    <Typography
                        variant='h6'
                        sx={{
                            fontWeight: 600
                        }}
                    >
                        Active projects
                    </Typography>
                    <Typography
                        variant='caption'
                        sx={{
                            color: 'text.secondary',
                        }}
                    >
                        There are now 173 monthly active projects in the ecosystem
                    </Typography>
                </Stack>
            } />
            <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
                <ReactApexChart
                    type="line"
                    series={[
                        {
                            name: "Community",
                            data: [30, 41, 35, 51, 49, 62, 69, 91, 148, 160, 165, 170],
                        },
                        {
                            name: "Core",
                            data: [25, 22, 32, 39, 42, 40, 60, 62, 70, 75, 81, 85]
                        }
                    ]}
                    options={chartOptions}
                    height={364}
                />
            </Box>
        </Card>
    );
}

export default ActiveProjects;

