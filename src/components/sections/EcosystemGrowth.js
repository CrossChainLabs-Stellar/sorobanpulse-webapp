/** @module EcosystemGrowth **/
//import { useState, useEffect } from 'react';
import { Stack, Card, Typography, CardHeader } from '@mui/material';
import TinyCircle from '../TinyCircle';


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
            <Stack spacing={3.37} sx={{ p: 5, pt: 0, pr: 0, height: '25.25rem', marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
                <Stack
                    direction="row"
                    sx={{
                        boxShadow: '0px 12px 24px -4px #0000001F',
                        width: '93%',
                        height: { xl: '30rem', lg: '19rem' },
                        borderRadius: '10px',
                    }}
                >
                    <TinyCircle fillColor="#00AB55" innerProcent={25.5} />
                    <Stack
                        direction="column"
                        sx={{ marginLeft: '1rem' }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '20px',
                                marginTop: 'auto',
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
                        width: '93%',
                        height: { xl: '30rem', lg: '19rem' },
                        borderRadius: '10px',
                    }}
                >
                    <TinyCircle fillColor="#00AB55" innerProcent={32.8} />
                    <Stack
                        direction="column"
                        sx={{ marginLeft: '1rem' }}
                    >
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
                        width: '93%',
                        height: { xl: '30rem', lg: '19rem' },
                        borderRadius: '10px',
                    }}
                >
                    <TinyCircle fillColor="#EB5757" innerProcent={0.5} />
                    <Stack
                        direction="column"
                        sx={{ marginLeft: '1rem' }}
                    >

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
