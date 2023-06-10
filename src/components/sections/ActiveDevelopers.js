/** @module CommitsChart **/
import merge from 'lodash/merge';
// import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box, Typography, Stack } from '@mui/material';
import { CustomChart } from '../chart'


/**
 * Bar chart that displays the number of commits for each month over the last year.
 */
function ActiveDevelopers() {

    const chartOptions = merge(CustomChart(), {
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan'],
            lables: {
                colors: ["#ffe54b", "#493ba4"],
            },
        },
        colors: ["#ffe54b", "#493ba4"],
        fill: {
            colors: ["#ffe54b", "#493ba4"],
            //colors: ["#F2C1B0", "#F15A24"],
        },
        // stroke: {
        //   width: 2,
        //   colors: ["#F15A24", "#F2C1B0"],
        //   //colors: ["#F2C1B0", "#F15A24"],
        // },

    });

    return (
        <Card
            sx={{
                marginTop: '3rem',
                boxShadow: '0px 4px 4px 0px #00000040',
            }}
        >
            <CardHeader
                title={
                    <Stack direction='column'>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: 600
                            }}
                        >
                            Active developers
                        </Typography>
                        <Typography
                            variant='caption'
                            sx={{
                                color: 'text.secondary',
                            }}
                        >
                            There are now 1,635 monthly active developers in the ecosystem
                        </Typography>
                    </Stack>
                }
            />
            <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
                {/* <ReactApexChart type="bar" series={state.data} options={chartOptions} height={364} /> */}
                <ReactApexChart
                    type="bar"
                    series={[
                        {
                            name: 'Community',
                            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 105, 115, 124] 
                        },
                        {
                            name: 'Core',
                            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 70, 65]
                        },
                    ]}
                    options={chartOptions}
                    height={364}
                />
            </Box>
        </Card>
    );
}

export default ActiveDevelopers;
