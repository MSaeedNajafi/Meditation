import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { Icon, SpanElem } from "../About/AboutElements";
import MdPhone from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";
// import img from "../../images/self/contactme.jpg";

import img from "../../images/self/sitting.jpg";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ffda6b",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffda6b",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffda6b",
    },
    "&:hover fieldset": {
      borderColor: "#0b0b0",
      borderRadius: 4,
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffda6b",
    },
  },
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      style={{ color: "white" }}
      {...props}
    >
      {"Saeed Najafi © "}
      {new Date().getFullYear()}
      <Link color="inherit">All rights reserved</Link> {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ContactSide() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const preventDefault = (event) => event.preventDefault();
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    setLoading(true);
    console.log(email, subject, message);

    emailjs
      .sendForm(
        "meditationwithfauzia",
        "meditationwithfauzia",
        form.current,
        "user_oICXidG2G3XkZVLMmEpb2"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent!");
          setLoading(false);
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          alert("Error");
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          component={Paper}
          style={{ backgroundColor: "#7e8846" }}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Icon to="/">
              Meditation<SpanElem> with </SpanElem>Fauzia
            </Icon>
            {/* <Divider variant="inset" component="line" /> */}
            <Grid>
              <Typography
                component="h5"
                variant="title"
                style={{ color: "#0b0b0" }}
              >
                <Chip
                  icon={<EmailIcon style={{ color: "#0b0b0" }} />}
                  label="E-mail:"
                  style={{ color: "#0b0b0" }}
                />
                fsucces30@hotmail.com
              </Typography>
              <Typography
                component="h5"
                variant="title"
                style={{ color: "#0b0b0" }}
              >
                <Chip
                  icon={<MdPhone style={{ color: "#0b0b0" }} />}
                  label="Telefoon: "
                  style={{ color: "#0b0b0b" }}
                />
                06 11 07 84 03
              </Typography>
            </Grid>
            <Box
              component="form"
              // noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
              ref={form}
              // style={{ backgroundColor: "red" }}
            >
              <CssTextField
                margin="normal"
                required
                fullWidth
                name="user_email"
                label="Email Address"
                id="email"
                autoComplete="email"
                autoFocus
                style={{
                  backgroundColor: "grey",
                }}
                InputLabelProps={{
                  style: {
                    color: "#ffda6b",
                  },
                }}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
              />

              <CssTextField
                margin="normal"
                required
                fullWidth
                name="subject"
                label="Subject"
                type="text"
                id="subject"
                // autoComplete="subject"
                style={{
                  backgroundColor: "grey",
                }}
                InputLabelProps={{
                  style: {
                    color: "#ffda6b",
                  },
                }}
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
                value={subject}
              />
              <CssTextField
                margin="normal"
                required
                fullWidth
                id="message"
                label="Message"
                name="message"
                multiline
                rows={4}
                style={{
                  backgroundColor: "grey",
                }}
                InputLabelProps={{
                  style: {
                    color: "#ffda6b",
                  },
                }}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                value={message}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  backgroundColor: "#ffda6b",
                  padding: "8px 0",
                  border: "none",
                  borderRadius: 4,
                  color: "#fff",
                  fontSize: 20,
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                disabled={loading ? true : false}
              >
                <Typography
                  variant="body2"
                  style={{
                    color: "#0b0b0",
                    fontSize: 24,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                  align="center"
                >
                  {loading ? "Sending ..." : "Contact Me"}
                </Typography>
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
