import { Grid } from "@material-ui/core";
import React from "react";

const PortfolioTable = () => {
  return (
    <div>
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={4}>
          Symbol
        </Grid>
        <Grid item xs={12} sm={4}>
          Symbol Name
        </Grid>
        <Grid item xs={12} sm={4}>
          Symbol
        </Grid>
        <Grid item xs={12} sm={4}>
          Symbol
        </Grid>
      </Grid>
    </div>
  );
};

export default PortfolioTable;
