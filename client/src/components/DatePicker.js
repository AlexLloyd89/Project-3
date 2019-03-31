import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

function DatePickers(props) {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        value={props.defaultDate}
        name={props.name}
        onChange={props.changeHandler}
        label="Workout Date"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DatePickers);
