import { Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color='primary'
        padding="10px"
        textAlign="center"
        mt="10px"
      >
        پروژه بلاگ با GraphQL
      </Typography>
    </div>
  );
}
