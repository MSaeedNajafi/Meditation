import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import {
  ServicesH1,
  ServicesP,
  ServicesP1,
} from "../Services/ServicesElements";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const CssCard = styled(Card)({
  "&:hover ": {
    transform: "scale(1.05)",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
  },
});

function PricingContent() {
  const [t, i18n] = useTranslation();
  const tiers = [
    {
      title: t("groepsessie"),
      price: "13.00",
      description: ["90 " + t("minuten"), "1  " + t("sessie")],
      buttonText: "Reserveren",
      buttonVariant: "outlined",
    },
    {
      title: t("Proefsessie"),
      // subheader: "Trial",
      price: "7.50",
      description: ["90 " + t("minuten"), "1  " + t("sessie")],
      buttonText: "Reserveren",
      buttonVariant: "contained",
    },
    {
      title: "3 x " + t("groepsessie"),
      price: "38.00",
      description: ["90 " + t("minuten"), "per  " + t("sessie")],
      buttonText: "Reserveren",
      buttonVariant: "outlined",
    },
  ];
  const tiers2 = [
    {
      title: "Privé sessie",
      subheader: "Online",
      price: "10.00",
      description: ["30 " + t("minuten"), "1 " + t("sessie")],
      // extra: t("reiskosten"),
      buttonText: "Reserveren",
      buttonVariant: "outlined",
    },
    {
      title: " Privé " + t("sessie"),
      subheader: "Online",
      price: "15.00",
      description: ["45 " + t("minuten"), "1 " + t("sessie")],
      // extra: t("reiskosten"),
      buttonText: "Reserveren",
      buttonVariant: "contained",
    },
    {
      title: t("dsadaadsasd"),
      // subheader: "Online",
      price: "35.00",
      description: ["50 " + t("minuten"), "1 " + t("sessie")],
      extra: "" + t("reiskosten") + "",
      buttonText: "Reserveren",
      buttonVariant: "outlined",
    },
  ];
  return (
    <>
      <div style={{ backgroundColor: "#7e8846" }} id="pricing">
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />

        {/* Hero unit */}
        <Container
          disableGutters
          maxWidth="md"
          component="main"
          sx={{ pt: 8, pb: 1 }}
        >
          <ServicesH1>{t("Pricing")}</ServicesH1>

          <ServicesP style={{ textAlign: "center" }}>
            {t("PricingTxt")}
          </ServicesP>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main" sx={{ pt: 8, pb: 1 }}>
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
                <CssCard>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{
                      align: "center",
                      variant: "headline",
                      fontWeight: "bold",
                    }}
                    action={tier.title === "Pro" ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: "center",
                      // fontSize: 20,
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
                        style={{ fontSize: 20 }}
                      >
                        €{tier.price}
                      </Typography>
                      {/* <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography> */}
                    </Box>
                    {/* <ul> */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        justifyContent: "center",
                        alignItems: "stretch",
                      }}
                    >
                      {tier.description.map(
                        (line) => (
                          // <Typography
                          //   component="li"
                          //   variant="subtitle1"
                          //   align="center"
                          //   key={line}
                          // >
                          <>{line + " "}</>
                        )

                        // </Typography>
                      )}
                    </div>
                    {/* </ul> */}
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
                        fontSize: 16,
                        textTransform: "capitalize",
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </CssCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <div style={{ backgroundColor: "#7e8846" }}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />

        {/* Hero unit */}
        <Container
          disableGutters
          // maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 1 }}
        >
          <ServicesH1>{t("privatess")}</ServicesH1>
          <ServicesP style={{ padding: 20 }}>{t("privatesstxt")}</ServicesP>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
          <Grid container spacing={5} alignItems="flex-end">
            {tiers2.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <CssCard>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{
                      align: "center",
                      variant: "headline",
                      fontWeight: "bold",
                    }}
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
                        style={{ fontSize: 20 }}
                      >
                        €{tier.price}
                      </Typography>
                      {/* <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography> */}
                    </Box>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        justifyContent: "center",
                        alignItems: "stretch",
                      }}
                    >
                      {tier.description.map(
                        (line) => (
                          // <Typography
                          //   component="li"
                          //   variant="subtitle1"
                          //   align="center"
                          //   key={line}
                          // >
                          <>{line + " "}</>
                        )
                        // </Typography>
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        justifyContent: "center",
                        alignItems: "stretch",
                        fontSize: 12,
                      }}
                    >
                      {tier.extra}
                    </div>
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
                        fontSize: 16,
                        textTransform: "capitalize",
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </CssCard>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div style={{ padding: 20 }}>
          <ServicesP1>{t("Corporate")}</ServicesP1>
        </div>
      </div>
    </>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
