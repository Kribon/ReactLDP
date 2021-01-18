import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Restaurant from "../../molecules/Restaurant/Restaurant";
import useRestaurantsFilter from "../../../services/useRestaurantsFilter";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  item: {
    margin: "20px 0",
  },
  root: {
    padding: "40px",
  },
  filterType: {
    width: "150px",
    marginRight: "30px",
  },
});

const RestaurantItems = (props) => {
  const classes = useStyles();

  const [restaurants, applyFilter] = useRestaurantsFilter();

  return (
    <Grid container className={classes.root}>
      <Grid container item>
        <Grid item>
          <FormControl variant="outlined" className={classes.filterType}>
            <InputLabel>sort</InputLabel>
            <Select
              onChange={(event) => {
                applyFilter("sort", event.target.value);
              }}
              label="sort"
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={"rating"}>rating</MenuItem>
              <MenuItem value={"time"}>time</MenuItem>
              <MenuItem value={"cost asc"}>cost &darr;</MenuItem>
              <MenuItem value={"cost dec"}>cost &uarr;</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl variant="outlined" className={classes.filterType}>
            <InputLabel>rating</InputLabel>
            <Select
              onChange={(event) => {
                applyFilter("rating", event.target.value);
              }}
              label="rating"
            >
              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={1}>above 1</MenuItem>
              <MenuItem value={2}>above 2</MenuItem>
              <MenuItem value={3}>above 3</MenuItem>
              <MenuItem value={4}>above 4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl variant="outlined" className={classes.filterType}>
            <InputLabel>cost</InputLabel>
            <Select
              onChange={(event) => {
                applyFilter("cost", event.target.value);
              }}
              label="cost"
            >
              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={100}>min 100</MenuItem>
              <MenuItem value={200}>min 200</MenuItem>
              <MenuItem value={400}>min 400</MenuItem>
              <MenuItem value={600}>min 600</MenuItem>
              <MenuItem value={1000}>min 1000</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container item direction="row" alignItems="stretch" spacing={2}>
        {restaurants.map((value, index) => {
          return (
            <Grid
              item
              id={index}
              md={4}
              sm={6}
              xs={12}
              key={index}
              className={classes.item}
            >
              <Restaurant {...value}></Restaurant>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default RestaurantItems;
