import { useQuery } from "@apollo/client";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GET_COMMENTS } from "../graphql/queries";

export default function Comments({ slug }) {
  const { data, loading, error } = useQuery(GET_COMMENTS, {
    variables: { slug },
  });

  if (loading) return null;
  const { comments } = data;
  console.log(comments);
  return (
    <div>
      <Grid
        container
        sx={{
          boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
          borderRadius: "10px",
          mt: 5,
          py: 1,
        }}
      >
        <Grid item m={2} xs={12}>
          <Typography
            component="p"
            variant="h6"
            fontWeight={700}
            color="primary"
          >
            کامنت ها
          </Typography>
        </Grid>
        {comments.map((item) => (
          <Grid item xs={12} m={2} key={item.id} border="1px solid silver" borderRadius={1} padding={2}>
            <Box component='div' display='flex' alignItems="center" mb={3}>
              <Avatar>{item.name[0]} </Avatar>
              <Typography component="span" variant="p" fontWeight={700} marginLeft={2}>
                {item.name}
              </Typography>
            </Box>
            <Typography component='p' variant="p">{item.text}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
