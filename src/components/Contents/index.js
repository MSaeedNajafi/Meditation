import React from "react";
import { PageContentainer, Wrpper } from "./ContentElements";
import { useTranslation } from "react-i18next";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

const PageContent = () => {
  const [t] = useTranslation();

  const terms = [
    t("Boeking"),
    t("Meditatiebegeleider"),
    t("Graag"),
    t("Deelname"),
    t("geenmedicatie"),
    t("Persoonlijke"),
    t("Restitutie"),
    t("Wees"),
    t("Betaling"),
    t("Contactgegevens"),
  ];

  let content = [];
  terms.map((t, index) => {
    content.push(
      <ListItemButton>
        <ListItemText
          style={{ fontSize: 24, color: "white" }}
          primary={index + 1 + ") " + t}
        />
      </ListItemButton>
    );
  });

  console.log(terms);

  return (
    <>
      <PageContentainer>
        {/* <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}> */}
        <Wrpper>
          <List
            component="nav"
            aria-label="secondary mailbox folder"
            subheader={
              <ListSubheader
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                {t("algemene")}
              </ListSubheader>
            }
          >
            {content}
          </List>
          {/* </Box> */}
        </Wrpper>
      </PageContentainer>
    </>
  );
};

export default PageContent;
