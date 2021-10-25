import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { ServicesH1, ServicesP } from "../Services/ServicesElements";

import { MeditateH1, MeditateBottomDesc } from "../HowToMeditate/HowToMeditate";
const tiers = [
  {
    title: "Trial",
    price: "0",
    description: ["10 users included", "Help center access", "Email support"],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Group Session",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Private Session",
    price: "30",
    description: [
      "50 users included",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

function PricingContent() {
  return (
    <>
      <div style={{ backgroundColor: "#7e8846" }}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />

        {/* Hero unit */}
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 6 }}
        >
          <ServicesH1>Pricing</ServicesH1>

          <ServicesP>
            Quickly build an effective pricing table for your potential
            customers with this layout. It&apos;s built with default MUI
            components with little customization.
          </ServicesP>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    action={tier.title === "Pro" ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      <Typography
                        component="h2"
                        variant="h3"
                        color="text.primary"
                      >
                        €{tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      // sx={{ mt: 3, mb: 2 }}
                      style={{
                        backgroundColor:
                          tier.buttonVariant === "outlined"
                            ? "white"
                            : "#ffda6b",
                        padding: "8px 0",
                        color:
                          tier.buttonVariant === "outlined"
                            ? "#ffda6b"
                            : "white",
                        borderColor: "#ffda6b",
                        // tier.buttonVariant === "outlined"
                        //   ? "#ffda6b"
                        //   : "white",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
