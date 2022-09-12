import React from "react";
import { useQuery } from "@apollo/client";
import {GET_BLOGS_DATA} from "../graphql/queries";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";
export default function Blogs() {
  const { data, loading, error } = useQuery(GET_BLOGS_DATA);
  return (
    <div>
      <Grid container spacing={2}>
        {data ? (
          data.posts.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CardEL posts={item}/>
            </Grid>
          ))
        ) : (
          <h1><Loader/></h1>
        )}
      </Grid>
    </div>
  );
}
