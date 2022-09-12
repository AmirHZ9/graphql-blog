import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function CardEL({ posts }) {
  const { author, coverPhoto, slug, title } = posts;
  return (
    <div>
      <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0 4px 12px", borderRadius: 4 }}>
        {
          author && <CardHeader
          avatar={<Avatar src={author.avatar.url} />}
          title={<Typography sx={{marginRight:2}}>{author.name}</Typography>}
        />
        }
        <CardMedia 
        component='img'
        height='194'
        image={coverPhoto.url}
        />
        <CardContent>
            <Typography component="h3" variant='h6' color="text-primary">
    {title}
            </Typography>
        </CardContent>
        <Divider variant="middle" sx={{margin:"10px"}}/>
        <CardActions>
          <Link to={`blog/${slug}`} style={{width:"100%"}} >
           <Button variant='outlined' size='small' sx={{width:"100%" , borderRadius:3}}>مطالعه بیشتر</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
