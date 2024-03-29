import { createTheme } from '@mui/material/styles';
import { pixelToRem, fontSizes } from '../utils/font';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const FONT_PRIMARY = 'Public Sans, sans-serif';



export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: "#002E5D"
        },
        secondary: {
            main: `${arcOrange}`
        },
        success: {
            main: "#00AB55"
        },
        error: {
            main: '#EB5757'
        }

    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1400,
            lg_xl: 1650,
            xl: 1900,
            xxl: 2560,
        },
    },
    typography: {
        fontFamily: FONT_PRIMARY,
        h3: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: pixelToRem(30),
            ...fontSizes({ sm: 26, md: 30, lg: 32 }),
        },
        h6: {
            fontWeight: 700,
            lineHeight: 28 / 18,
            fontSize: pixelToRem(17),
            ...fontSizes({ sm: 18, md: 18, lg: 18 }),
        },
        subtitle: {
            fontWeight: 600,
            lineHeight: 22 / 14,
            fontSize: pixelToRem(14),
        },
        body: {
            lineHeight: 22 / 14,
            fontSize: pixelToRem(14),
        },
    },
});