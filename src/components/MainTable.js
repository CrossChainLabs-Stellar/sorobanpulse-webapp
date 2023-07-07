// import React, { useState, useEffect, useCallback, useContext, useRef, useLayoutEffect } from 'react';
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
import Comunity from "../assets/Comunity.svg";
import Core from "../assets/Core.svg";

import { fNumber } from '../utils/format';


const StyledLinearProgress = styled((props) => <LinearProgress {...props} />)(
    ({ theme }) => ({


    }),
);


export default function MainTable() {
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

                    <MainHead />

                    <TableBody>
                        {mockData.map((row, index) => {
                            const {
                                id,
                                name,
                                ecosystem,
                                maxDevs,
                                devNumber,
                                contributions,
                                growth,
                                graf } = row;

                            let devFill;
                            if (maxDevs === 0) {
                                devFill = 0;
                            }
                            else {
                                devFill = ((devNumber * 100) / (maxDevs + devNumber));
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

                                        {ecosystem === 'core' ?
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
                                            {fNumber(maxDevs)}
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
                                                {devNumber}
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
                                                value={devFill}
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
                                        {growth >= 0 && (
                                            <Stack direction="row">
                                                <img
                                                    src={CirleRise}
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
                                                    {`+${growth}%`}
                                                </Typography>
                                            </Stack>
                                        )}

                                        {growth < 0 && (
                                            <Stack direction="row">
                                                <img
                                                    src={CirleFall}
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
                                                    {`${growth}%`}
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
                                        {graf === "verde" && (
                                            <ReactApexChart
                                                type="line"
                                                series={[
                                                    {
                                                        name: "Desktops",
                                                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                                                    },
                                                ]}
                                                options={chartOptionsVerde}
                                                height={75}
                                                width={125}
                                            />
                                        )}

                                        {graf === "rosu" && (
                                            <ReactApexChart
                                                type="line"
                                                series={[
                                                    {
                                                        name: "Desktops",
                                                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                                                    },
                                                ]}
                                                options={chartOptionsRosu}
                                                height={75}
                                                width={125}
                                            />
                                        )}

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