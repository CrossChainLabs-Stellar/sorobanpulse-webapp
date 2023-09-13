import { useState, useEffect } from 'react';
import React from "react";
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
import { alpha } from '@mui/material/styles';
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
import { Waypoint } from 'react-waypoint';


const StyledLinearProgress = styled((props) => <LinearProgress {...props} />)(
    ({ theme }) => ({


    }),
);


export default function MainTable({ search }) {
    const [state, setState] = useState({
        loading: true,
        total: 0,
        projects: []
    });
    const [params, setParams] = useState({});
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const client = new Client();
        params.offset = offset;

        console.log(params);

        client.get('projects', params).then((response) => {
            if (params.offset > 0) {
                setState({
                    loading: false,
                    total: response?.total,
                    projects: [...state.projects, ...response.list],
                });
            } else {
                setState({
                    loading: false,
                    total: response?.total,
                    projects: response?.list,
                });
            }
        });
    }, [search, params, offset, setState]);

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
        tooltip: {
            enabled: false,
        },
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
        tooltip: {
            enabled: false,
        },
    });

    const paramsCallback = (new_params) => {
        setState({
            loading: true,
            total: 0,
            projects: []
        });
        new_params.offset = 0;
        setOffset(0);
        setParams({
            ...params,
            ...new_params,
        });
    }

    const handleWaypointEnter = () => {
        if (offset < state.total) {
            setOffset(offset + 20);
        }
    };

    return (
        <>
            <TableContainer
                sx={{
                    minWidth: 800,
                    maxHeight: '86rem',
                }}
            // ref={tableEl}
            >
                <Table
                    stickyHeader
                    sx={{
                        "& .MuiTableRow-root:hover": {
                            backgroundColor: alpha('#919EAB', 0.2)
                        }
                    }}
                >

                    <MainHead paramsCallback={paramsCallback} />

                    <TableBody>
                        {state.projects?.map((item, id) => {
                            const {
                                name,
                                is_core_project,
                                active_contributors,
                                contributions,
                                developers,
                                active_contributors_percentage,
                                activity_growth,
                                commits
                            } = item;

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
                                <React.Fragment key={id}>
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
                                                height: '5rem',
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
                                            sx={{
                                                border: 'none'
                                            }}
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
                                                    {`${Math.round(active_contributors_percentage)}%`}
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
                                                    value={active_contributors_percentage}
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
                                                        src={(growth_trend === true) ? CirleRise : CirleFall}
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
                                                        {`${(growth_trend === true) ? '+' : ''}${Math.round(activity_growth * 10) / 10}%`}
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
                                                        name: "Activity",
                                                        data: activity//activity ? activity : [],
                                                    },
                                                ]}
                                                options={growth_trend ? chartOptionsVerde : chartOptionsRosu}
                                                height={75}
                                                width={125}
                                            />
                                        </TableCell>

                                    </TableRow>
                                    <Waypoint onEnter={handleWaypointEnter} />
                                </React.Fragment>
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