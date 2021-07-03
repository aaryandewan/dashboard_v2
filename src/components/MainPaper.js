import React from "react";
import Graphs from "./Graphs";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function MainPaper() {
  return (
    <Grid container style={{ marginTop: "50px" }}>
      <Grid item xs={12} sm={8}>
        <Paper
          variant="outlined"
          elevation={3}
          style={{ marginTop: "50p", width: "100%" }}
        >
          <div>
            Paper
            <Graphs />
          </div>
        </Paper>
      </Grid>
      {/* <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ marginTop: "50p", width: "100%" }}>
          <div>
            Paper
            <Graphs />
          </div>
        </Paper>
      </Grid> */}
    </Grid>
  );
}
