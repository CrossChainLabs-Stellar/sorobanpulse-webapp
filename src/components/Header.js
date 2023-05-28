import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Container, Grid } from '@mui/material';

import logo from "../assets/logo.svg";

const BG_COLOR = '#ffffff';

const HEIGHT = 92;


const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: HEIGHT,
    padding: theme.spacing(0, 5)
}));

const TextTypography = styled(Typography)(({ theme }) => ({
    color: "#000000",
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h3.fontWeight,
    lineHeight: theme.typography.h3.lineHeight,
}));


export default function Header() {

    return (
        <AppBar sx={{ boxShadow: 0, bgcolor: BG_COLOR }}>
            <ToolbarStyle disableGutters sx={{ height: '5em' }}>
                <Container maxWidth='xl'>
                    <Grid container>
                        <Grid item xs={12} md={0} />
                        <img
                            src={logo}
                            alt=""
                            style={{
                                maxWidth: 30,
                                marginRight: '10px'
                            }}
                        />
                        <TextTypography>SorobanPulse</TextTypography>
                    </Grid>
                </Container>
            </ToolbarStyle>
        </AppBar>
    );
}
