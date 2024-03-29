/** @module CommitsChart **/
import merge from 'lodash/merge';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box, Typography, Stack } from '@mui/material';
import { CustomChart } from '../chart'
import { Client } from '../../utils/client';
import { number } from '../../utils/format';

/**
 * Bar chart that displays the number of contributors for each month over the last year.
 */
function ActiveDevelopers() {
    const [state, setState] = useState({
        loading: true,
        categories: [],
        total: 0,
        data: [
            { name: 'Core', data: [] },
            { name: 'Community ', data: [] }
        ]
    });

    useEffect(() => {
        const client = new Client();

        client.get('active_contributors').then((response) => {
            let contributors = response;
            contributors.pop();
            if (contributors.length > 12) {
                contributors.splice(0, contributors.length - 12);
            }

            let total = 0;
            if (contributors.length > 0) {
                total = parseInt(contributors[contributors.length - 1].active_contributors_core) + parseInt(contributors[contributors.length - 1].active_contributors_ecosystem);
            }

            let coreData = [];
            let ecosystemData = [];
            let categories = [];

            contributors.forEach(item => {
                coreData.push(item.active_contributors_core ? item.active_contributors_core : 0);
                ecosystemData.push(item.active_contributors_ecosystem ? item.active_contributors_ecosystem : 0);
                categories.push(item.display_month.slice(0, -3));
            });

            setState({
                loading: false,
                categories: categories,
                total: total,
                data: [
                    { name: 'Core', data: coreData },
                    { name: 'Community', data: ecosystemData }
                ]
            });
        });
    }, [setState]);

    const chartOptions = merge(CustomChart(), {
        xaxis: {
            categories: state.categories,
            lables: {
                colors: ["#FDDA24", "#002E5D"],
            },
        },
        colors: ["#FDDA24", "#002E5D"],
        fill: {
            colors: ["#FDDA24", "#002E5D"],
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
                            sx={{
                                marginX: '1.4rem',
                                fontWeight: 600,
                                fontSize: '20px',
                            }}
                        >
                            Active developers
                        </Typography>
                        <Typography
                            variant='caption'
                            sx={{
                                marginX: '1.4rem',
                                color: 'text.secondary',
                                fontSize: '16px',
                            }}
                        >
                            There are now {number(state.total)} monthly active developers in the ecosystem
                        </Typography>
                    </Stack>
                }
            />
            <Box sx={{ mt: 3, ml: 3, mr: 4, marginTop: '0rem', marginBottom: '1.5rem' }} dir="ltr">
                {/* <ReactApexChart type="bar" series={state.data} options={chartOptions} height={364} /> */}
                <ReactApexChart
                    type="bar"
                    series={state.data}
                    options={chartOptions}
                    height={366}
                />
            </Box>
        </Card>
    );
}

export default ActiveDevelopers;
