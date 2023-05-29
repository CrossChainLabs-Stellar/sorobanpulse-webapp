import { createTheme } from '@mui/material/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";


export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: "#3E3385"
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

});