import React from "react";
import { useQuery } from "@apollo/client";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GET_POST_DATA } from "../graphql/queries";
import Loader from "../shared/Loader";
import { Container } from "@mui/system";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CommentForm from "../Comment/CommentForm";
import Comments from "../Comment/Comments";
export default function BlogPage() {
  const params = useParams();
  const slug = params.slug;
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_POST_DATA, {
    variables: { slug },
  });

  if (loading)
    return (
      <h1>
        <Loader />
      </h1>
    );
  if (error) return <h1>Error</h1>;
  const {
    coverPhoto,
    title,
    content,
    author: { avatar, name, field },
  } = data.post;
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            xs={12}
            mt={9}
            display="flex"
            justifyContent="space-between"
          >
            <Typography component="h2" variant="h4" fontWeight={700}>
              {title}
            </Typography>

            <ArrowBackIcon onClick={() => navigate(-1)} />
          </Grid>
          <Grid item xs={12} mt={6}>
            <img
              src={coverPhoto.url}
              alt={slug}
              width="100%"
              style={{ borderRadius: "15px" }}
            />
          </Grid>

          <Grid item xs={12} mt={7} display="flex" alignItems="center">
            <Avatar
              src={avatar.url}
              sx={{ width: 80, height: 80, marginLeft: 2 }}
            />
            <Box component="div">
              <Typography component="p" variant="h5" fontWeight={700}>
                {name}
              </Typography>
              <Typography
                component="p"
                variant="h5"
                fontWeight={700}
                color="text.secondary"
              >
                {field}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mt={5}>
            <Typography component={'div'}>
              <Box dangerouslySetInnerHTML={{ __html: content.html }}></Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
              <CommentForm slug={slug} />
          </Grid>
          <Grid item xs={12}>
            <Comments slug={slug}/>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}
