import { useState } from 'react';
// material
import {
    Typography,
    TableRow,
    TableCell,
    TableHead,
    Stack,
    IconButton
} from '@mui/material';


// components

// assets
import triunghi from '../assets/triunghi.svg';

// ----------------------------------------------------------------------


export default function IssuesHead({ paramsCallback }) {
    const [isDescNumber, setIsDescNumber] = useState(true);
    const [isDescName, setIsDescName] = useState(true);
    const [isDescUpdatedAt, setIsDescUpdatedAt] = useState(true);

    const styleNumber = {
        transform: !isDescNumber ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }
    const styleName = {
        transform: !isDescName ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }
    const styleTime = {
        transform: !isDescUpdatedAt ? 'rotate(180deg)' : '',
        transition: 'transform 150ms ease', // smooth transition
    }

    // const handleSortNumber = () => {
    //     paramsCallback({ sortBy: 'number', sortType: isDescNumber ? 'asc' : 'desc' });
    //     setIsDescNumber(!isDescNumber);
    //     setIsDescName(true);
    //     setIsDescUpdatedAt(true);
    // }

    // const handleSortName = () => {
    //     paramsCallback({ sortBy: 'title', sortType: isDescName ? 'asc' : 'desc' });
    //     setIsDescNumber(true);
    //     setIsDescName(!isDescName);
    //     setIsDescUpdatedAt(true);
    // }

    // const handleSortUpdatedAt = () => {
    //     paramsCallback({ sortBy: 'updated_at', sortType: isDescUpdatedAt ? 'asc' : 'desc' });
    //     setIsDescNumber(true);
    //     setIsDescName(true);
    //     setIsDescUpdatedAt(!isDescUpdatedAt);
    // }

    return (
        <TableHead>
            <TableRow
                sx={{
                    height: '4rem',
                }}
            >
                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: { xl: '20rem', lg: '15rem' },
                        backgroundColor: "#FFEC8D",
                        paddingLeft: '3rem',
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px',
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                        >
                            Project name
                        </Typography>

                        <IconButton
                            id="basic-button"
                            // onClick={handleSortName}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleName}
                            />
                        </IconButton>
                    </Stack>
                </TableCell>

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: '15rem',
                        backgroundColor: "#FFEC8D"
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                color: '#3E3385'
                            }}
                        >
                            Developers
                        </Typography>

                        <IconButton
                            id="basic-button"
                            // onClick={handleSortName}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleName}
                            />
                        </IconButton>
                    </Stack>
                </TableCell>

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: '20rem',
                        backgroundColor: "#FFEC8D"
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{ marginTop: '1.2rem' }}
                    >

                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                        >
                            Active developers
                        </Typography>

                        <IconButton
                            id="basic-button"
                            // onClick={(e) => handleSort('open_prs')}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleNumber}
                            />
                        </IconButton>
                    </Stack>
                    <Typography
                        noWrap
                        sx={{
                            fontWeight: 450,
                            opacity: 0.75,
                            marginTop: 0,
                            fontSize: 12,
                            color: '#3E3385'
                        }}
                    >
                        last 30 days
                    </Typography>
                </TableCell>

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: { xl: '15rem', lg: '12rem' },
                        backgroundColor: "#FFEC8D"
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                color: '#3E3385'
                            }}
                        >
                            Contributions
                        </Typography>

                        <IconButton
                            id="basic-button"
                            // onClick={handleSortName}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleName}
                            />
                        </IconButton>
                    </Stack>
                </TableCell>


                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        width: '20rem',
                        backgroundColor: "#FFEC8D"
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{ marginTop: '1.2rem', }}
                    >

                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                        >
                            Activity growth
                        </Typography>

                        <IconButton
                            id="basic-button"
                            // onClick={(e) => handleSort('open_prs')}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleNumber}
                            />
                        </IconButton>
                    </Stack>
                    <Typography
                        noWrap
                        sx={{
                            fontWeight: 450,
                            opacity: 0.75,
                            marginTop: 0,
                            fontSize: 12,
                            color: '#3E3385'
                        }}
                    >
                        last 6 months
                    </Typography>
                </TableCell>

                <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    padding="none"
                    sx={{
                        backgroundColor: "#FFEC8D",
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px',
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                marginRight: '0.35rem',
                                color: '#3E3385'
                            }}
                        >
                            Activity
                        </Typography>

                        <IconButton
                            id="basic-button"
                            // onClick={handleSortUpdatedAt}
                            sx={{
                                padding: 0,
                                marginTop: '0.15rem'
                            }}
                        >
                            <img
                                src={triunghi}
                                alt='triunghi'
                                style={styleTime}
                            />
                        </IconButton>
                    </Stack>
                </TableCell>

            </TableRow>
        </TableHead>
    );
}
