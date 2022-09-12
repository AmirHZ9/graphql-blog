import React from "react";
import { Toolbar, AppBar, Typography,Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
              بلاگ
            </Typography>
            <Link to='/'>
            <BookIcon style={{color:'white'}}/>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
