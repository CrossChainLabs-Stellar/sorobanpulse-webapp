/** @module TopDevelopers **/
// import { useState, useEffect } from 'react';
import { Box, Stack, Card, Typography, CardHeader, Link } from '@mui/material';

import logo from '../../assets/logo.svg';

function ContributorItem({ item }) {
    const { dev_name, avatar_url, contributions } = item

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Box component="img" src={avatar_url} sx={{ width: 30, height: 30, borderRadius: 1.5 }} />
            <Box sx={{ minWidth: 240 }}>
                <Typography variant="subtitle2" noWrap>
                    <Link
                        target="_blank"
                        color="inherit"
                        rel="noopener"
                        href={"https://github.com/" + dev_name}>
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
        <Card sx={{ marginTop: '3rem', boxShadow: 4 }}>
            <CardHeader title="Top developers" />
            <Stack spacing={5.37} sx={{ p: 5.4, pr: 0, height: '25.5rem', overflowY: 'scroll' }}>
                {/* {state.top_contributors?.map((item) => (
          <ContributorItem key={item.dev_name} item={item} />
        ))} */}
                <ContributorItem
                    item={{
                        dev_name: 'backlitRO',
                        avatar_url: { logo },
                        contributions: 3
                    }}
                />
                <ContributorItem
                    item={{
                        dev_name: 'backlitRO',
                        avatar_url: { logo },
                        contributions: 3
                    }}
                />
                <ContributorItem
                    item={{
                        dev_name: 'backlitRO',
                        avatar_url: { logo },
                        contributions: 3
                    }}
                />
            </Stack>
        </Card>
    );
}

export default TopDevelopers;
