import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#20262e',
      contrastText: '#cfd0d2',
    },
    secondary: {
      main: '#0084ff',
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#20262e',
      },
    },
    MuiInputLabel: {
      root: {
        color: '#cfd0d2',
        '&$focused': {
          color: '#0084ff',
        },
      },
    },
    MuiInput: {
      root: {
        color: '#cfd0d2',
        borderBottomColor: '#cfd0d2',
        '&:after': {
          borderBottomColor: '#cfd0d2',
        },
      },
      underline: {
        color: '#cfd0d2',
        '&&&&:hover:before': {
          borderBottomColor: '#0084ff',
        },
        '&:before': {
          borderBottomColor: '#cfd0d2',
        },
        '&:after': {
          borderBottomColor: '#0084ff',
        },
      },
    },
    MuiOutlinedInput: {
      root: {

        backgroundColor: '#1c2128',
        '& $notchedOutline': {

          borderColor: '#cfd0d2',
        },
      },
    },
    MuiTabs: {
      root: {
        color: '#cfd0d2',
      }
    }
  },
});

export default theme;
