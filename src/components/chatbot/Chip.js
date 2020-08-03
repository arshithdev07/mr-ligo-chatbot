import React from "react";
import Chip from '@material-ui/core/Chip';

function MatChip(props) {

  return <Chip
            label={props.label}
            style={{backgroundColor: "#6E48AA", color: "white"}}
            // className={classes.chip}
            component="a"
            href={props.link}
            target="_blank"
            clickable
        />
}
export default MatChip;