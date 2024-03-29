import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  grid: {
    "@media screen and (max-width: 905px)": {
      flexGrow: '0',
      maxWidth: "100%",
      flexBasis: "100%",
      flexDirection: "column"
    }
  },
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    "@media screen and (max-width: 422px)": {
      flexDirection: "column",
    }
  },
  heading: {
    color: "#4a3d85",
  },
  mainContainer: {
    "@media screen and (max-width: 905px)": {
      flexDirection: "column-reverse"
    },
    "@media screen and (max-width: 599px)": {
      flexDirection: "column-reverse",
    },
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
