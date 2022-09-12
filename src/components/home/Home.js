import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Author from "../Author/Author";
import Blogs from "../Blogs/Blogs";

export default function Home() {
  return (
    <div>
      <Container>
        <Grid container padding={3}>
          <Grid item xs={12} md={3} pl={2}>
            <Typography component="h3" variant="h5" fontWeight={700} mb={2}>
              نویسنده ها
            </Typography>
            <Author/>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography component="h3" variant="h5" fontWeight={700} mb={2}>
              مقالات
            </Typography>
            <Blogs/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
