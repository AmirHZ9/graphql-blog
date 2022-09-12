import React, { useState, useEffect } from "react";
import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { SEND_COMMENTS} from "../graphql/mutation";
import { useMutation } from "@apollo/client";
import formValidation from "./formValidation";
import ErrorIcon from "@mui/icons-material/Error";
export default function CommentForm({ slug }) {
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [focus, setFocus] = useState(false);
  const [sendData, setSendData] = useState(true);
  const [error, setError] = useState("");
  const [sendComment, { loading, data }] = useMutation(SEND_COMMENTS, {
    variables: {
      name: commentData.name,
      email: commentData.email,
      text: commentData.text,
      slug,
    },
  });
  useEffect(() => {
    setError(formValidation(commentData));
  }, [commentData]);

  const changeHandler = (event) => {
    setCommentData({
      ...commentData,
      [event.target.name]: event.target.value,
    });
  };

  const focusHandler = (event) => {
      setFocus({

        ...focus,[event.target.name]:true
      })
  };

  const sendHandler = () => {
    if (!error.name && !error.email && !error.text) {
      sendComment();
      setCommentData({
        name: "",
        email: "",
        text: "",
      })
      setSendData(true);
    } else {
      toast.warn("تمامی فیلدها باید به طور صحیح پر شوند");
    }
  };
  
  if (data && sendData) {
    toast.success(" کامنت ارسال شد و منتظر تایید است");
    setSendData(false);
  }
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
        <Grid item xs={12} m={2}>
          <Typography component="p" variant="h6" color="primary">
            ارسال کامنت
          </Typography>
        </Grid>
        <Grid item xs={12} m={2} dir="rtl">
          <TextField
            label="نام"
            variant="outlined"
            sx={{ width: "100%" }}
            value={commentData.name}
            name="name"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <Box component="div" xs={12} mt={1}>
            {error.name && focus.name && (
              <Typography
                component="p"
                variant="p"
                color="red"
                display="flex"
                alignItems="center"
              >
                {<ErrorIcon />}
                {error.name}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField
            label="ایمیل"
            variant="outlined"
            sx={{ width: "100%" }}
            value={commentData.email}
            name="email"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <Box component="div" xs={12} mt={1}>
            {error.email && focus.email &&  (
              <Typography
                component="p"
                variant="p"
                color="red"
                display="flex"
                alignItems="center"
              >
                {<ErrorIcon />}
                {error.email}
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} m={2}>
          <TextField
            label="کامنت"
            variant="outlined"
            sx={{ width: "100%" }}
            value={commentData.text}
            name="text"
            onFocus={focusHandler}
            onChange={changeHandler}
            multiline
            minRows={4}
          />
          <Box component="div" xs={12} mt={1}>
            {error.text && focus.text &&  (
              <Typography
                component="p"
                variant="p"
                color="red"
                display="flex"
                alignItems="center"
              >
                {<ErrorIcon />}
                {error.text}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} m={2}>
          {loading ? (
            <Button variant="contained" disabled>
              در حال ارسال...
            </Button>
          ) : (
            <Button variant="contained" onClick={sendHandler}>
              ارسال
            </Button>
          )}
        </Grid>
        <ToastContainer />
      </Grid>
    </div>
  );
}
