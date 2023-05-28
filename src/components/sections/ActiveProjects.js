/** @module EcosystemChart **/
import merge from 'lodash/merge';
// import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { CustomChart } from '../chart'

/**
 * Line chart that displays the number of active developers and active repositories for each month over the last year.
 */
function ActiveProjects() {
    const chartOptions = merge(CustomChart(), {
        // xaxis: {
        //     categories: state.categories,
        // },
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
        <Card sx={{ marginTop: '3rem', boxShadow: 4 }}>
            <CardHeader title="Active Repositories" />
            <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
                <ReactApexChart
                    type="line"
                    series={[
                        {
                            name: "Desktops",
                            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                        },
                        {
                            name: "Low - 2013",
                            data: [12, 11, 14, 18, 17, 13, 13]
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

