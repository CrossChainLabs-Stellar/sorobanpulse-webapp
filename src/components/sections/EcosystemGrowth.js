/** @module TopContributors **/
//import { useState, useEffect } from 'react';
import { CircularProgress, Stack, Card, Typography, CardHeader, Box } from '@mui/material';

function CircularProgressWithLabel(props) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', }}>
            <CircularProgress
                variant="determinate"
                size={75}
                sx={{
                    marginX: '1.2rem',
                    marginY: '0.4rem',
                }}
                {...props}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.primary"
                    fontSize='16px'
                    sx={{
                        fontWeight: 600
                    }}
                >
                    {`${props.insideprocent}%`}
                </Typography>
            </Box>
        </Box>
    );
}


function EcosystemGrowth() {

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
                                marginX: '1.4rem',
                                fontWeight: 600
                            }}
                        >
                            Ecosystem growth
                        </Typography>
                        <Typography
                            variant='caption'
                            sx={{
                                marginX: '1.4rem',
                                color: 'text.secondary',
                                fontSize: '14px',
                            }}
                        >
                            last 6 months
                        </Typography>
                    </Stack>
                }
            />
            <Stack spacing={3.37} sx={{ p: 5, pr: 0, height: '25.25rem', marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
                <Stack
                    direction="row"
                    sx={{
                        //marginX: '0.5rem',
                        boxShadow: '0px 12px 24px -4px #0000001F',
                        width: { xl: '30rem', lg: '19rem' },
                        height: { xl: '30rem', lg: '19rem' },
                        borderRadius: '10px',
                    }}
                >
                    <CircularProgressWithLabel
                        variant="determinate"
                        value={75}
                        insideprocent={25.5}
                        color='success'
                    />
                    <Stack direction="column">
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '20px',
                                marginTop: 'auto'
                            }}
                        >
                            +132
                        </Typography>
                        <Typography
                            variant='subtitle2'
                            sx={{
                                fontWeight: 600,
                                marginBottom: 'auto'
                            }}
                            color="text.secondary"
                        >
                            Monthly active projects
                        </Typography>
                    </Stack>
                </Stack>
                <Stack
                    direction="row"
                    sx={{
                        boxShadow: '0px 12px 24px -4px #0000001F',
                        width: { xl: '30rem', lg: '19rem' },
                        height: { xl: '30rem', lg: '19rem' },
                        borderRadius: '10px',
                    }}
                >
                    <CircularProgressWithLabel
                        variant="determinate"
                        value={75}
                        insideprocent={32.8}
                        color='success'
                    />
                    <Stack direction="column">
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '20px',
                                marginTop: 'auto'
                            }}
                        >
                            +236
                        </Typography>
                        <Typography
                            variant='subtitle2'
                            sx={{
                                fontWeight: 600,
                                marginBottom: 'auto'
                            }}
                            color="text.secondary"
                        >
                            Monthly active developers
                        </Typography>
                    </Stack>
                </Stack>
                <Stack
                    direction="row"
                    sx={{
                        boxShadow: '0px 12px 24px -4px #0000001F',
                        width: { xl: '30rem', lg: '19rem' },
                        height: { xl: '30rem', lg: '19rem' },
                        borderRadius: '10px',
                    }}
                >
                    <CircularProgressWithLabel
                        variant="determinate"
                        value={75}
                        insideprocent={0.5}
                        color='error'
                    />
                    <Stack direction="column">
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '20px',
                                marginTop: 'auto'
                            }}
                        >
                            -174
                        </Typography>
                        <Typography
                            variant='subtitle2'
                            sx={{
                                fontWeight: 600,
                                marginBottom: 'auto'
                            }}
                            color="text.secondary"
                        >
                            Monthly contributions
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Card >
    );
}

export default EcosystemGrowth;
