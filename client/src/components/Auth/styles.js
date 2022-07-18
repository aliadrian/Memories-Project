import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  switchButton: {
    margin: theme.spacing(0, 0, 1),
    backgroundColor: blueGrey[500],
    color: theme.palette.getContrastText(blueGrey[500]),
    textTransform: 'none',

    "&:hover": {
      backgroundColor: blueGrey[600],
    }
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
}));