import * as React from "react";
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
import img from "../../images/self/contactme.jpg";
import Divider from "@mui/material/Divider";
import { Icon, SpanElem } from "../About/AboutElements";
import MdPhone from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";
import EmailIcon from "@mui/icons-material/Email";

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
      borderColor: "white",
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
      {...props}
    >
      {"Saeed Najafi © "}
      <Link color="inherit">All rights reserved</Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function ContactSide() {
  const preventDefault = (event) => event.preventDefault();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
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
          md={5}
          component={Paper}
          style={{ backgroundColor: "black" }}
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
            <Divider variant="inset" component="li" />
            <Typography component="h1" variant="h5" style={{ color: "white" }}>
              <Chip
                icon={<EmailIcon />}
                label="E-mail: "
                style={{ color: "white" }}
              />
              fsucces30@hotmail.com
            </Typography>
            <Typography component="h1" variant="h5" style={{ color: "white" }}>
              <Chip
                icon={<MdPhone />}
                label="Telefoon: "
                style={{ color: "white" }}
              />
              06 11 07 84 03
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
              // style={{ backgroundColor: "red" }}
            >
              <CssTextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                id="email"
                autoComplete="email"
                autoFocus
                style={{
                  backgroundColor: "grey",
                }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
              />

              <CssTextField
                margin="normal"
                required
                fullWidth
                name="subject"
                label="Subject"
                type="text"
                id="subject"
                autoComplete="subject"
                style={{
                  backgroundColor: "grey",
                }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
              />
              <CssTextField
                margin="normal"
                required
                fullWidth
                id="message"
                label="Message"
                multiline
                rows={4}
                style={{
                  backgroundColor: "grey",
                }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
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
              >
                <Typography
                  variant="body2"
                  style={{
                    color: "white",
                    fontSize: 24,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                  align="center"
                >
                  Contact Me
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
