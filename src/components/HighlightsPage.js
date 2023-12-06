import { useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import TopCard from "./highlightCards/TopCard";
import NewsCards from "./highlightCards/NewsCards";

const HighlightsPage = () => {
    const mapper = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const [counter, setCounter] = useState(0);
    const [currentMainColor, setCurrentMainColor] = useState("#000");
    const [currentSecondaryColor, setCurrentSecondaryColor] = useState("#fff");
    return (
        <Box sx={{

            marginBottom: '5rem'
        }}
        >
            <Grid
                container
                spacing={3}
                sx={{
                    paddingY: '2rem',
                    paddingX: '3rem'
                }}
            >

                <Grid item xs={12} md={12} lg={4}>
                    <TopCard
                        title='Fast to Finality'
                        text='The Stellar network transactions are confirmed within 5 seconds, with all time average ledger speed at 5.19s'
                        boxStyling={{ boxShadow: 1, height: '12rem', width: '35rem', borderRadius: '10px', padding: '2rem', backgroundColor: '#fff' }}
                        textStyling={{ marginLeft: '2rem', marginTop: '2rem', }}
                    />
                </Grid>

                <Grid item xs={12} md={12} lg={4}>
                    <TopCard
                        title='Energy-Efficient Design'
                        text='Research showed the Stellar network’s footprint is the equivalent to the greenhouse gas emissions from 33.7 US homes’ electricity use for one year.'
                        boxStyling={{ boxShadow: 1, height: '12rem', width: '35rem', borderRadius: '10px', padding: '2rem', backgroundColor: '#fff' }}
                        textStyling={{ marginLeft: '2rem', marginTop: '2rem' }}
                    />
                </Grid>

                <Grid item xs={12} md={12} lg={4}>
                    <TopCard
                        title='Affordable for Developers'
                        text='The Stellar network performs transactions for a fraction of a US penny, with the average transaction cost = .000002 XLM.'
                        boxStyling={{ boxShadow: 1, height: '12rem', width: '35rem', borderRadius: '10px', padding: '2rem', backgroundColor: '#fff' }}
                        textStyling={{ marginLeft: '2rem', marginTop: '2rem' }}
                    />
                </Grid>

            </Grid>

            <Box sx={{ backgroundColor: '#000', height: '40rem', opacity: '0.85', padding: '2rem' }}>

                <Grid
                    container
                    spacing={3}
                    sx={{
                        paddingY: '2rem',
                        paddingX: '3rem'
                    }}
                >
                    <Grid item xs={12} md={12} lg={4}>
                        <Typography sx={{ color: '#fff', width: '35rem', fontWeight: '600' }} align="center">
                            BTC
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={12} lg={4} >
                        <Typography sx={{ color: '#fff', width: '35rem', fontWeight: '600' }} align="center">
                            XML
                        </Typography >
                    </Grid>

                    <Grid item xs={12} md={12} lg={4}>
                        <Typography sx={{ color: '#fff', width: '35rem', fontWeight: '600' }} align="center">
                            ETH
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={12} lg={4}>
                        <TopCard
                            title='Speed'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{ boxShadow: 1, height: '8rem', width: '35rem', borderRadius: '10px', padding: '2rem', backgroundColor: '#fff' }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={4}>
                        <TopCard
                            title='Speed'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{ boxShadow: 1, height: '8rem', width: '35rem', borderRadius: '10px', padding: '2rem', backgroundColor: '#fff' }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={4}>
                        <TopCard
                            title='Speed'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{ boxShadow: 1, height: '8rem', width: '35rem', borderRadius: '10px', padding: '2rem', backgroundColor: '#fff' }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <TopCard
                            title='Energy'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{ boxShadow: 1, height: '8rem', width: '35rem', borderRadius: '10px', padding: '2rem', backgroundColor: '#fff' }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={4}>
                        <TopCard
                            title='Energy'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{ boxShadow: 1, height: '8rem', width: '35rem', borderRadius: '10px', padding: '2rem', backgroundColor: '#fff' }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={4}>
                        <TopCard
                            title='Energy'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{ boxShadow: 1, height: '8rem', width: '35rem', borderRadius: '10px', padding: '2rem', backgroundColor: '#fff' }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <TopCard
                            title='Transaction Fee'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{ boxShadow: 1, height: '8rem', width: '35rem', borderRadius: '10px', padding: '2rem', backgroundColor: '#fff' }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={4}>
                        <TopCard
                            title='Transaction Fee'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{ boxShadow: 1, height: '8rem', width: '35rem', borderRadius: '10px', padding: '2rem', backgroundColor: '#fff' }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={4}>
                        <TopCard
                            title='Transaction Fee'
                            text='tx 5 seconds, with all time average ledger speed at 5.19s'
                            boxStyling={{ boxShadow: 1, height: '8rem', width: '35rem', borderRadius: '10px', padding: '2rem', backgroundColor: '#fff' }}
                            textStyling={{ marginLeft: '2rem', marginTop: '1rem' }}
                        />
                    </Grid>

                </Grid>
            </Box>

            <Typography
                sx={{
                    marginLeft: '5rem',
                    marginTop: '3rem',
                    fontSize: '24px',
                    fontWeight: '600'
                }}
            >
                News Feed
            </Typography>


            <Grid
                container
                spacing={2}
                sx={{
                    paddingY: '2rem',
                    paddingX: '8rem'
                }}
            >
                {mapper.map((item, index) => {
                    return (
                        <Grid item xs={12} md={12} lg={3} key={index}>
                            <NewsCards
                                titleShort='Crypto News'
                                titleLong='Stellar initiates security audits for imminent Soroban smart contracts platform'
                                text='The Stellar Development Foundation is set to enhance its blockchain offerings with Soroban, a new smart contract platform, currently in...'
                                mainColor='#000'
                                secondaryColor='#fff'
                            />
                        </Grid>
                    )
                })}
            </Grid>

        </Box>
    )
}
export default HighlightsPage