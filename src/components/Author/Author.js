import React from "react";
import { useQuery } from "@apollo/client";
import { GET_Authors_DATA } from "../graphql/queries";
import { Divider, CardHeader, Avatar, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";
export default function Author() {
  const { data, loading, error } = useQuery(GET_Authors_DATA);
  if (loading)
    return (
      <h1>
        <Loader />
      </h1>
    );
  if (error) return <h1>error</h1>;
  const { authors } = data;

  return (
    <div>
      <Grid
        container
        sx={{ boxShadow: "rgba(0,0,0,0.1) 0 4px 12px", borderRadius: 4 }}
      >
        {authors.map((item, index) => (
          <React.Fragment key={item.id}>
            <Link
              to={`/author/${item.slug}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Grid item xs={12}>
                <CardHeader
                  avatar={<Avatar src={item.avatar.url} />}
                  title={
                    <Typography
                      component="p"
                      variant="p"
                      sx={{ marginRight: "10px" }}
                    >
                      {item.name}
                    </Typography>
                  }
                />
              </Grid>
            </Link>
            {index !== authors.length - 1 && (
              <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}
