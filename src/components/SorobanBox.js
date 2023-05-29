import React from 'react'

import { Box, Typography } from '@mui/material'

export default function SorobanBox() {
    return (
        <Box
            sx={{
                marginTop: '5rem',
                height: '4rem',
                backgroundColor: "#FFEC8D",
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 4px 4px 0px #00000040',
            }}
        >
            <Typography
                variant='h6'
                sx={{
                    fontWeight: 500,
                    fontSize: 24,
                    color: '#3E3385'
                }}
            >
                Soroban's ecosystem activity
            </Typography>
        </Box>
    )
}
