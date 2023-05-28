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
            <Typography>
                Soroban's ecosystem activity
            </Typography>
        </Box>
    )
}
