import React from "react";
import { Paper, Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const UnderstandingBreakpoints = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <StyledPaper>xs=12 sm=6 md=3</StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledPaper>xs=12 sm=6 md=3</StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledPaper>xs=12 sm=6 md=3</StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledPaper>xs=12 sm=6 md=3</StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UnderstandingBreakpoints;
