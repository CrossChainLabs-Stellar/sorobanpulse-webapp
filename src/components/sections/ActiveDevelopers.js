/** @module CommitsChart **/
import merge from 'lodash/merge';
// import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { CustomChart } from '../chart'


/**
 * Bar chart that displays the number of commits for each month over the last year.
 */
function ActiveDevelopers() {

    const chartOptions = merge(CustomChart(), {
        xaxis: {
            // categories: state.categories,
            lables: {
                colors: ["#FFDF42", "#3E3385"],
            },
        },
        colors: ["#FFDF42", "#3E3385"],
        fill: {
            colors: ["#FFDF42", "#3E3385"],
            //colors: ["#F2C1B0", "#F15A24"],
        },
        // stroke: {
        //   width: 2,
        //   colors: ["#F15A24", "#F2C1B0"],
        //   //colors: ["#F2C1B0", "#F15A24"],
        // },

    });

    return (
        <Card sx={{ marginTop: '3rem', boxShadow: 4 }}>
            <CardHeader
                title="Active developers"
            />
            <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
                {/* <ReactApexChart type="bar" series={state.data} options={chartOptions} height={364} /> */}
                <ReactApexChart
                    type="bar"
                    series={[
                        {
                            name: 'Net Profit',
                            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                        },
                        {
                            name: 'Revenue',
                            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
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
