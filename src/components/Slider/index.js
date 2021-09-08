import ReactGrid, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
  },
  input: {
    width: 50,
  },
  days: {
    color: "black",
    fontWeight: "bold",
  },
  values: {
    color: "black",
    textAlign: "right",
  },
  dolla: {
    color: "#00c389",
    fontWeight: "bold",
    // marginLeft: -10,
  },
});

export default function InputSlider() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const calcDaily = (value) => {
    return (300000000 * value) / 43000000 / 52;
  };
  const calcMontly = (value) => {
    return (300000000 * value) / 43000000 / 12;
  };
  const calcYearly = (value) => {
    return (300000000 * value) / 43000000;
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  console.log(value);

  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <TextField
            required
            id="standard-required"
            label="Your Staked XRD"
            value={value}
            onChange={handleInputChange}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <p className={classes.days}>Yearly</p>
        </Grid>
        <Grid item xs={4}>
          <p className={classes.values}>{Math.round(calcYearly(value))}</p>
        </Grid>
        <Grid item xs={2}>
          <p className={classes.dolla}>XRD</p>
        </Grid>

        <Grid item xs={6}>
          <p className={classes.days}>Monthly</p>
        </Grid>
        <Grid item xs={4}>
          <p className={classes.values}>{Math.round(calcMontly(value))}</p>
        </Grid>
        <Grid item xs={2}>
          <p className={classes.dolla}>XRD</p>
        </Grid>

        <Grid item xs={6}>
          <p className={classes.days}>Daily</p>
        </Grid>
        <Grid item xs={4}>
          <p className={classes.values}>{Math.round(calcDaily(value))}</p>
        </Grid>
        <Grid item xs={2}>
          <p className={classes.dolla}>XRD</p>
        </Grid>
      </Grid>
    </div>
  );
}
