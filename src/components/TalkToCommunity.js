import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Call from '@material-ui/icons/Call';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Chat from '@material-ui/icons/Chat';
import Group from '@material-ui/icons/Group';

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
  }
});

class TalkToCommunity extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { classes } = this.props;

    return (
      <div>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SearchOutlined />
          </Avatar>

          <form className={classes.form}>
          <div>
          <Typography variant="h6" gutterBottom align="center">
            Talk to a person
          </Typography>


              <List component="nav">
                <ListItem button>
                  <ListItemIcon>
                    <Call />
                  </ListItemIcon>
                  <ListItemText inset primary="Call me back" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <CalendarToday />
                  </ListItemIcon>
                  <ListItemText inset primary="Schedule a call" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Chat />
                  </ListItemIcon>
                  <ListItemText inset primary="Chat" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Group />
                  </ListItemIcon>
                  <ListItemText inset primary="Ask the community" />
                </ListItem>
            </List>
          </div>
          </form>

        </Paper>
      </main>
      </div>
    );
  }
}

TalkToCommunity.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(TalkToCommunity));
