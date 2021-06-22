import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        /*primary: {
            main: '#0099cc'
        },
        secondary: {
            main: '#9900cc'
        },*/
        primary: {
            main: '#212121',
            light: '#484848',
            dark: '#000000'
        },
        secondary: {
            main: '#07df6f',
            light: '#06c663',
            dark: '#c6c606'
        },
    }
});

export default theme;