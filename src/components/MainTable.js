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
    Link,
    LinearProgress
} from '@mui/material';

import styled from '@emotion/styled';

// components
// import SearchNotFound from '../SearchNotFound';
// import TableEmpty from '../TableEmpty';
import MainHead from './MainHead';

import mockData from '../mock/mockData';

// assets


const StyledLinearProgress = styled((props) => <LinearProgress {...props} />)(
    ({ theme }) => ({
        colorPrimary: "#3E3385",
        barColorPrimary: '#D6CEEB',
    }),
);


export default function MainTable() {


    return (
        <>
            <TableContainer
                sx={{
                    minWidth: 800,
                    maxHeight: '40rem',
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
                                    hover
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
                                            paddingLeft: 0,
                                        }}
                                    >
                                        <Typography variant="subtitle2" noWrap>
                                            {name}
                                        </Typography>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
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
                                            {maxDevs}
                                        </Typography>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
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
                                    >
                                        <Typography variant="subtitle2" noWrap>
                                            {contributions}
                                        </Typography>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                    >
                                        {growth}

                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        component="th"
                                        scope="row"
                                        padding="none"
                                    >

                                        {graf}
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