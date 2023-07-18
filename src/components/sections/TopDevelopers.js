/** @module TopDevelopers **/
// import { useState, useEffect } from 'react';
import { Box, Stack, Card, Typography, CardHeader, Link, Select, MenuItem, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import mockAvatar from '../../mock/mockAvatar.svg';

const StyledInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 5,
        border: '1px solid #ced4da',
        paddingLeft: '0.5rem',
        paddingTop: '0rem',
        paddingBottom: '0rem',
        textAlign: 'center',
        fontSize: 13,
        height: '1.45rem',
    },

}));

function ContributorItem({ item }) {
    // const { dev_name, avatar_url, contributions } = item;
    const { dev_name, contributions } = item;
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Box
                component="img"
                src={mockAvatar}
                sx={{
                    width: 45,
                    height: 45,
                    borderRadius: 1.5,
                    marginLeft: '1rem'
                }}
            />
            <Box
                sx={{
                    minWidth: {
                        xl: 200,
                        lg: 100
                    },
                }}
            >
                <Typography variant="subtitle2" noWrap>
                    <Link
                        target="_blank"
                        color="inherit"
                        rel="noopener"
                        href={"https://github.com/" + dev_name}
                        underline='none'
                    >
                        {dev_name}
                    </Link>
                </Typography>
            </Box>
            <Box flexGrow={2}></Box>
            <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
                {contributions} commits
            </Typography>
        </Stack>
    );
}

/**
 * List of top 10 contributors of the month.
 */
function TopDevelopers() {

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
                                fontWeight: 600,
                                marginX: '1.4rem',
                            }}
                        >
                            Top developers
                        </Typography>
                        <Typography
                            variant='caption'
                            sx={{
                                color: 'text.secondary',
                                marginX: '1.4rem',
                            }}
                        >
                            last 30 days
                        </Typography>
                    </Stack>
                }
                action={
                    <Select
                        defaultValue={1}
                        sx={{
                            width: '7rem',
                            marginRight: '0.3rem',
                        }}
                        input={<StyledInput />}
                        MenuProps={{
                            sx: {
                                "&& .Mui-selected": {
                                    backgroundColor: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#ffffff',
                                    },
                                    '&:active': {
                                        backgroundColor: '#ffffff',
                                    },
                                    '&:focus': {
                                        backgroundColor: '#ffffff',
                                    },
                                },
                                "&& .MuiList-root": {
                                    backgroundColor: '#ffffff',
                                }
                            }
                        }}
                    >
                        <MenuItem
                            value={1}
                            sx={{
                                backgroundColor: '#ffffff',
                                '&:hover': {
                                    backgroundColor: '#ffffff',
                                },
                            }}
                        >
                            {'Community'}
                        </MenuItem>
                        <MenuItem
                            value={2}
                            sx={{
                                backgroundColor: '#ffffff',
                                '&:hover': {
                                    backgroundColor: '#ffffff',
                                },
                            }}
                        >
                            {'Core'}
                        </MenuItem>
                        <MenuItem
                            value={3}
                            sx={{
                                backgroundColor: '#ffffff',
                                '&:hover': {
                                    backgroundColor: '#ffffff',
                                },
                            }}
                        >
                            {'All'}
                        </MenuItem>
                    </Select>
                }
                sx={{
                    '& .MuiCardHeader-action': {
                        marginTop: '0.075rem',
                        marginRight: '0.5rem'
                    }
                }}
            />
            <Stack spacing={5} sx={{ pl: 3, pr: 0, height: '25.25rem', overflowY: 'scroll' }}>
                {/* {state.top_contributors?.map((item) => (
          <ContributorItem key={item.dev_name} item={item} />
        ))} */}
                <ContributorItem
                    item={{
                        dev_name: 'Jack',
                        // avatar_url: { logo },
                        contributions: 3
                    }}
                />
                <ContributorItem
                    item={{
                        dev_name: 'Donna',
                        // avatar_url: { logo },
                        contributions: 3
                    }}
                />
                <ContributorItem
                    item={{
                        dev_name: 'Eliza',
                        // avatar_url: { logo },
                        contributions: 3
                    }}
                />
                <ContributorItem
                    item={{
                        dev_name: 'Bob',
                        // avatar_url: { logo },
                        contributions: 3
                    }}
                />
                <ContributorItem
                    item={{
                        dev_name: 'Jim',
                        // avatar_url: { logo },
                        contributions: 3
                    }}
                />
                <ContributorItem
                    item={{
                        dev_name: 'Don',
                        // avatar_url: { logo },
                        contributions: 3
                    }}
                />
                <ContributorItem
                    item={{
                        dev_name: 'Jhonatan',
                        // avatar_url: { logo },
                        contributions: 3
                    }}
                />
            </Stack>
        </Card>
    );
}

export default TopDevelopers;
