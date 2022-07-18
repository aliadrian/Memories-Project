import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'contain',
    width: '100%',
    maxHeight: '600px',
  },
  card: {
    display: 'flex',
    width: '100%',
    // flexWrap: 'wrap',
    // flexDirection: 'column',
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    margin: '20px 0',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column-reverse'
  },
  commentsInnerContainer: {
    marginTop: '20px',
    height: '100px',
    overflowY: 'auto',
    marginRight: '30px',
  },
  div1: {
    display: "flex",
    flexWrap: "wrap",
    "@media screen and (max-width: 600px)": {
      justifyContent: "center",
    }
  },
  div2: {
    display: "flex",
    flexDirection: "column",
    margin: "20px 20px 0 0",
    cursor: "pointer",
    padding: "20px",
    "&:hover": {
      boxShadow: " rgba(14, 30, 37, 0.25) 0px 2px 4px 0px, rgba(14, 30, 37, 0.52) 0px 2px 16px 0px;",
    }
  }
}
));
