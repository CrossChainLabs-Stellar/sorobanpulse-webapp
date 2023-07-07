import React, { useState } from 'react';

// material
import {
    Box,
    Stack,
    IconButton,
    Menu,
    List,
    MenuItem,
    Paper,
    Divider,
    Typography
} from '@mui/material';



// assets
import x from '../assets/x.svg';
import Comunity from '../assets/Comunity.svg';
import Core from '../assets/Core.svg';
import clearFilter from '../assets/clearFilter.svg';
import triunghi from '../assets/triunghi.svg';




export default function EcosystemTriangle() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isSorted, setIsSorted] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    function handleFilterClose(status) {
        handleClose();
        setIsSorted(true);
        // paramsCallback({ status: status });
    }

    return (
        <>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    padding: 0,
                    marginTop: '0.15rem'
                }}
            >
                <img src={triunghi} alt='triunghi' />
            </IconButton>
            {isSorted ?
                <IconButton
                    id="basic-button"
                    onClick={() => {
                        setIsSorted(false);
                        // paramsCallback({ status: undefined });
                    }}
                    style={{ padding: 0, marginLeft: '0.25rem' }}
                >
                    <img src={clearFilter} alt='clear' />
                </IconButton> : ''
            }
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                MenuListProps={{
                    sx: {
                        backgroundColor: "#fff",
                        padding: '0px',
                    }
                }}
            >
                <Box
                    sx={{
                        width: '12rem',
                        backgroundColor: '#fff',
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{
                            height: '2.5rem'
                        }}
                    >
                        <Typography
                            noWrap
                            variant='h6'
                            sx={{
                                fontWeight: '500',
                            }}
                        >
                            Filter by status
                        </Typography>
                        <IconButton onClick={handleClose} style={{ marginLeft: 'auto' }}>
                            <img src={x} alt='x' />
                        </IconButton>
                    </Stack>
                    <Divider />
                    <Paper
                        sx={{
                            backgroundColor: "#fff",
                            height: '7.5rem',
                        }}
                    >
                        <List
                            disablePadding={true}
                        >
                            <MenuItem
                                sx={{
                                    backgroundColor: '#FFFFFF',
                                    height: '3rem',
                                }}
                                onClick={() => handleFilterClose('closed')}
                            >
                                <img
                                    src={Comunity}
                                    alt="Comunity"
                                />
                            </MenuItem>
                            <Divider />
                            <MenuItem
                                sx={{
                                    backgroundColor: '#FFFFFF',
                                    height: '3rem',
                                }}
                                onClick={() => handleFilterClose('open')}
                            >
                                <img
                                    src={Core}
                                    alt="Core"
                                />
                            </MenuItem>
                        </List>
                    </Paper>
                </Box>
            </Menu>
        </>
    )
}
