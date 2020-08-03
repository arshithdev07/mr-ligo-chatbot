import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '50px'
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  formControl: {
    margin: "4px",
  },
  root: {
   width: 200,
   display: 'flex',
   alignItems: 'center',
 },
 textField: {
   marginLeft: theme.spacing.unit,
   marginRight: theme.spacing.unit,
 },
});

class FeedbackForm extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { classes } = this.props;

    return (
      <div>
      <main className={classes.main}>

        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SearchOutlined />
          </Avatar>

          <form className={classes.form}>

             <Typography variant="h6" gutterBottom align="center">
               We appreciate your feedback
             </Typography>

             <Grid container spacing={3}>

               <Grid item xs={12}>

                 <FormControl component="fieldset"  className={classes.formControl}>
                   <Typography variant="h10" gutterBottom align="left">
                     Did we resolve your issue
                   </Typography>

                    <RadioGroup aria-label="quiz" name="quiz">
                      <FormControlLabel value="oneContact" control={<Radio />} label="Yes, in one contact " />
                      <FormControlLabel value="multipleContacts" control={<Radio />} label="Yes, after multiple contacts " />
                      <FormControlLabel value="notresolved" control={<Radio />} label="No, did not resolve " />
                    </RadioGroup>

                </FormControl>

               </Grid>

               <Grid item xs={12}>
               <div>
                   <Box component="fieldset" mb={3} borderColor="transparent">
                     <Typography component="legend">How satisfied are you with this conversation? </Typography>
                     <Rating name="sat-conv" />
                   </Box>
                   <Box component="fieldset" mb={3} borderColor="transparent">
                     <Typography component="legend">How satisfied are you with LIGO?</Typography>
                     <Rating name="sat-ligo" />
                   </Box>

                   <Box component="fieldset" mb={3} borderColor="transparent">
                     <Typography component="legend">Based upon your experience, how likely are  you to recommend LIGO to a friend or colleague</Typography>
                     <Rating name="rec-friend" />
                   </Box>
              </div>

               </Grid>

               <Grid item xs={12}>
                 <TextField
                    id="outlined-full-width"
                    label="Tell us more"
                    style={{ margin: 8 }}
                    placeholder="Enter your feedback here"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}/>
               </Grid>

             </Grid>

          </form>
        </Paper>

      </main>
      </div>
    );
  }
}

FeedbackForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(FeedbackForm));
