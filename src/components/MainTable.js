import { useState, useEffect } from 'react';
// @mui
import {
    Box,
    Stack,
    Table,
    TableRow,
    TableBody,
    TableCell,
    Typography,
    TableContainer,
    LinearProgress
} from '@mui/material';

import styled from '@emotion/styled';
import merge from 'lodash/merge';

// components
// import SearchNotFound from '../SearchNotFound';
// import TableEmpty from '../TableEmpty';
import MainHead from './MainHead';
import { CustomChart } from './chart';
import ReactApexChart from 'react-apexcharts';
import mockData from '../mock/mockData';

// assets
import CirleRise from "../assets/CircleRise.svg";
import CirleFall from "../assets/CircleFall.svg";
import Comunity from "../assets/Community.svg";
import Core from "../assets/Core.svg";

import { fNumber } from '../utils/format';
import { Client } from '../utils/client';


const StyledLinearProgress = styled((props) => <LinearProgress {...props} />)(
    ({ theme }) => ({


    }),
);


export default function MainTable({ search }) {
    const [state, setState] = useState({
        loading: true,
        projects: []
    });
    const [params, setParams] = useState({});
    const [lastOffset, setLastOffset] = useState(0);

    useEffect(() => {
        const client = new Client();

        if (!search) {
            params.search = undefined;
        }
        else if (params.search !== search) {
            params.search = search;
            params.offset = 0;
            setLastOffset(0);
        }

        console.log(params)

        client.get('projects', params).then((response) => {
            let projects = response?.list;

            setState({
                loading: false,
                projects: projects,
            });
        });
    }, [search, params, setState]);

    const chartOptionsVerde = merge(CustomChart(), {
        xaxis: {
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        grid: {
            show: false
        },
        colors: ["#67A161"],
    });

    const chartOptionsRosu = merge(CustomChart(), {
        xaxis: {
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        grid: {
            show: false
        },
        colors: ["#CA1A0D"],
    });

    const paramsCallback = (new_params) => {
        setState({ 
            loading: true, 
            projects: [] 
        });
        new_params.offset = 0;
        setParams({
            ...params,
            ...new_params,
        });
    }


    return (
        <>
            <TableContainer
                sx={{
                    minWidth: 800,
                    maxHeight: '86rem',
                }}
            // ref={tableEl}
            >
                <Table stickyHeader>

                    <MainHead paramsCallback={paramsCallback} />

                    <TableBody>
                        {state.projects?.map((item, id) => {
                            const {
                                name,
                                is_core_project,
                                active_contributors,
                                contributions,
                                developers,
                                activity_growth,
                                commits 
                            } = item;

                            let activeDevelopersPercentage;
                            if (active_contributors === 0) {
                                activeDevelopersPercentage = 0;
                            } else {
                                activeDevelopersPercentage = (active_contributors / developers) * 100;
                            }

                            let activity = [];
                            if (commits?.length) {
                                for (const c of commits) {
                                    activity.push(parseInt(c.commits));
                                }
                            }

                            let growth_trend = true;
                            if (activity?.length > 0 && activity_growth) {
                                if (activity_growth < 0) {
                                    growth_trend = false;
                                }
                            }

                            return (
                                <TableRow
                                    key={id}
                                    tabIndex={-1}
                                >

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            height: '7rem',
                                            paddingLeft: '3rem',
                                            border: 'none'
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            noWrap
                                            sx={{
                                                maxWidth: {
                                                    xxl: '12rem',
                                                    xl: '12rem',
                                                    lg: '10rem',
                                                    md: '75%',
                                                    sm: '75%'
                                                },
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {name}
                                        </Typography>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                    >

                                        {is_core_project ?
                                            (
                                                <img
                                                    src={Core}
                                                    alt="Core"
                                                />
                                            ) :
                                            (
                                                <img
                                                    src={Comunity}
                                                    alt="Comunity"
                                                />
                                            )
                                        }
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            border: 'none'
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            noWrap
                                            sx={{
                                                maxWidth: { xl: '18rem', lg: '10rem' },
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {fNumber(developers)}
                                        </Typography>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            border: 'none'
                                        }}
                                    >
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            sx={{
                                                width: '12rem',
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                noWrap
                                                sx={{ marginLeft: "auto" }}
                                            >
                                                {active_contributors}
                                            </Typography>
                                        </Stack>
                                        <Box
                                            sx={{
                                                width: '100%',
                                            }}
                                        >
                                            <StyledLinearProgress
                                                sx={{
                                                    width: '12rem',
                                                    height: '0.4rem',
                                                    borderRadius: 5,
                                                    marginBottom: '1.45rem'
                                                }}
                                                variant='determinate'
                                                value={activeDevelopersPercentage}
                                            />
                                        </Box>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            border: 'none'
                                        }}
                                    >
                                        <Typography variant="subtitle2" noWrap>
                                            {fNumber(contributions)}
                                        </Typography>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            border: 'none'
                                        }}
                                    >
                                        { /*(activity_growth > 0 || activity_growth < 0) && */ (
                                            <Stack direction="row">
                                                <img
                                                    src={(growth_trend == true) ? CirleRise : CirleFall}
                                                    alt="rise"
                                                    style={{
                                                        height: '1.5rem',
                                                        marginRight: '0.5rem'
                                                    }}
                                                />
                                                <Typography
                                                    variant="subtitle2"
                                                    noWrap
                                                    sx={{
                                                        marginTop: '0.2rem'
                                                    }}
                                                >
                                                    {`${(growth_trend == true) ? '+' : ''}${activity_growth}%`}
                                                </Typography>
                                            </Stack>
                                        )}
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                        sx={{
                                            border: 'none',
                                            paddingRight: '3rem',
                                        }}
                                    >
                                            <ReactApexChart
                                                type="line"
                                                series={[
                                                    {
                                                        name: "Desktops",
                                                        data: activity//activity ? activity : [],
                                                    },
                                                ]}
                                                options={growth_trend ? chartOptionsVerde : chartOptionsRosu}
                                                height={75}
                                                width={125}
                                            />
                                    </TableCell>

                                </TableRow>
                            );
                        })}
                    </TableBody>


                    {/* {isUserNotFound && !tableEmpty && !state.loading && (
                        <TableBody>
                            <TableRow>
                                <TableCell align="center" colSpan={11} sx={{ py: 3 }}>
                                    <SearchNotFound searchQuery={search} />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )}

                    {tableEmpty && !state.loading && (
                        <TableBody>
                            <TableRow>
                                <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                                    <TableEmpty />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )} */}
                </Table>
            </TableContainer>
        </>
    );
}