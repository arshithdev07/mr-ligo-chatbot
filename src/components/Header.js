import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link} from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin:"25px"
  },
  mainFeaturedPost: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
    margin: theme.spacing.unit * 4,

  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  margin: {
   margin: theme.spacing.unit,
  }
});

class Header extends React.Component {

  render() {
   const { classes, transcript } = this.props;

   return (
     <div className={classes.root}>

       <Paper className={classes.mainFeaturedPost}>
         <Grid container>

           <Grid item md={2}>
             <div>
               <a href="#"
                  onMouseDown={this.props.startListening}
                  onMouseUp={this.props.getVoiceAsText}>
                   <Fab size="medium" color="secondary" aria-label="Add" className={classes.margin}>
                     <AddIcon />
                   </Fab>
               </a>
             <Fab  size="medium"  aria-label="Delete" className={classes.margin}>
              <DeleteIcon onClick = {this.props.resetTranscript}/>
            </Fab>
            </div>
           </Grid>

           <Grid item md={10}>
             <div className={classes.mainFeaturedPostContent}>
               <Typography component="subtitle1" variant="h3" color="inherit" gutterBottom>
                 {transcript}
               </Typography>
             </div>
           </Grid>

         </Grid>
       </Paper>

     </div>
   );
 }
}

 Header.propTypes = {
  classes: PropTypes.object.isRequired,
  transcript: PropTypes.string,
  startListening:PropTypes.func,
  getVoiceAsText:PropTypes.func,
  resetTranscript:PropTypes.func
};

export default withStyles(styles)(Header);
