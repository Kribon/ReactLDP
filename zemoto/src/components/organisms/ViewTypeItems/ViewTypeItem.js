import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import HeaderViewItem from "../../molecules/HeaderViewItem/HeaderViewItem";
import foodImg1 from "./../../../resources/images/collection2.jpg";
import foodImg2 from "./../../../resources/images/collection4.jpg";
import foodImg3 from "./../../../resources/images/collection6.jpg";
import foodImg4 from "./../../../resources/images/collection5.jpg";

const useStyles = makeStyles({
  root: {
    padding: "40px 40px 80px 40px",
  },
});

const ViewTypeItem = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.root} spacing={2}>
      <Grid item sm={3} xs={12}>
        <HeaderViewItem foodImg={foodImg1}>Order Food Online</HeaderViewItem>
      </Grid>
      <Grid item sm={3} xs={12}>
        <HeaderViewItem foodImg={foodImg2}>Go out for a meal</HeaderViewItem>
      </Grid>
      <Grid item sm={3} xs={12}>
        <HeaderViewItem foodImg={foodImg3}>Nightlife &#38; Clubs</HeaderViewItem>
      </Grid>
      <Grid item sm={3} xs={12}>
        <HeaderViewItem foodImg={foodImg4}>Zomato Pro</HeaderViewItem>
      </Grid>
    </Grid>
  );
};


export default ViewTypeItem;
