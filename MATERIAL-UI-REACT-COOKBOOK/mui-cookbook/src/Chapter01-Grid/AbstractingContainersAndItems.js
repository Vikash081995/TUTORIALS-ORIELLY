import React from "react";
import { Paper, Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const AbstractingContainersAndItems = () => (
  <Box sx={{ flexGrow: 1 }}>
    <Container spacing={4}>
      <Item xs={12} sm={6} md={3}>
        <StyledPaper>xs=12 sm=6 md=3</StyledPaper>
      </Item>
      <Item xs={12} sm={6} md={3}>
        <StyledPaper>xs=12 sm=6 md=3</StyledPaper>
      </Item>
      <Item xs={12} sm={6} md={3}>
        <StyledPaper>xs=12 sm=6 md=3</StyledPaper>
      </Item>
      <Item xs={12} sm={6} md={3}>
        <StyledPaper>xs=12 sm=6 md=3</StyledPaper>
      </Item>
    </Container>
  </Box>
);

export default AbstractingContainersAndItems;
