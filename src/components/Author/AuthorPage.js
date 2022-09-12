import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_DATA } from "../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";
export default function AuthorPage() {
  const params = useParams();
  const slug = params.slug;
  const { loading, data, error } = useQuery(GET_AUTHOR_DATA, {
    variables: { slug },
  });

  if (loading) return <h1><Loader/></h1>;
  if (error) return <h1>Error</h1>;
  const { name, field, avatar, posts, description } = data.author;
  console.log(posts);
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container mt={10}>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Avatar src={avatar.url} sx={{ width: "250px", height: "250px" }} />
            <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
              {name}
            </Typography>
            <Typography component="p" variant="h5" color="text.secondary">
              {field}
            </Typography>
          </Grid>
          <Grid item xs={12} mt={6}>
            <div dangerouslySetInnerHTML={{ __html: description.html }}></div>
          </Grid>
          <Grid item xs={12} mt={6}>
            <Typography component="h3" variant="h5" fontWeight={700}>
              مقالات {name}
            </Typography>

            <Grid container spacing={2} mt={2}>
              {posts.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <CardEL posts={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
