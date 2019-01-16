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
    MuiListSubheader: {
      root: {
        color: '#cfd0d2',
        fontSize: '1rem',
      },
    },
    MuiListItemIcon: {
      root: {
        color: '#cfd0d2',
      },
    },
    MuiTypography: {
      body1: {
        color: '#cfd0d2',
      },
    },
    MuiList: {
      root: {
        color: '#cfd0d2',
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: '#20262e',
      },
    },
    MuiInputLabel: {
      root: {
        color: '#cfd0d2',
        '&:hover:not($disabled):not($focused):not($error)': {
          color: '#0084ff',
        },
        '&$focused': {
          color: '#0084ff',
        },
      },
      focused: {},
      disabled: {},
      error: {},
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
        color: '#cfd0d2',
        backgroundColor: '#1c2128',
        '& $notchedOutline': {

          borderColor: '#cfd0d2',
        },
        '&$focused $notchedOutline': {
          borderColor: '#0084ff',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#0084ff',
        },
      },
      focused: {},
      disabled: {},
      error: {},
    },
    MuiTabs: {
      root: {
        color: '#cfd0d2',
      }
    }
  },
});

export default theme;

// '&$cssFocused $notchedOutline': {
//   borderColor: '#0084ff',
// },
// '&:hover:not($cssDisabled):not($cssFocused):not($cssError) $notchedOutline': {
//   borderColor: '#0084ff',
// },
