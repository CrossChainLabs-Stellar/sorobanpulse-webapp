import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';

import logo from "../assets/logo.svg";

const BG_COLOR = '#ffffff';

const HEIGHT = 92;


const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: HEIGHT,
    padding: theme.spacing(0, 5)
}));

const TextTypography = styled(Typography)(({ theme }) => ({
    color: "#000000",
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 600,
    lineHeight: theme.typography.h3.lineHeight,
    marginTop: '0.2rem'
}));


export default function Header() {

    return (
        <AppBar sx={{ boxShadow: 0, bgcolor: BG_COLOR }}>
            <ToolbarStyle disableGutters sx={{ height: '5em' }}>
                <Grid container>
                    <Grid item xs={12} md={0} />
                    <img
                        src={logo}
                        alt=""
                        style={{
                            maxWidth: 45,
                            marginRight: '10px',
                            marginLeft: '2.5rem'
                        }}
                    />
                    <TextTypography>SorobanPulse</TextTypography>
                </Grid>
            </ToolbarStyle>
        </AppBar>
    );
}
