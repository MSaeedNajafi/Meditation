import React from "react";
import { PageContentainer, Wrpper } from "./ContentElements";
import { useTranslation } from "react-i18next";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

const PageContent = () => {
  const [t] = useTranslation();
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
            <ListItemButton>
              <ListItemText
                style={{ fontSize: 24, color: "white" }}
                primary={t("Boeking")}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                style={{ fontSize: 24, color: "white" }}
                primary={t("Meditatiebegeleider")}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                style={{ fontSize: 24, color: "white" }}
                primary={t("Graag")}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                style={{ fontSize: 24, color: "white" }}
                primary={t("Deelname")}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                style={{ fontSize: 24, color: "white" }}
                primary={t("Persoonlijke")}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                style={{ fontSize: 24, color: "white" }}
                primary={t("Restitutie")}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                style={{ fontSize: 24, color: "white" }}
                primary={t("Wees")}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                style={{ fontSize: 24, color: "white" }}
                primary={t("Betaling")}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                style={{ fontSize: 24, color: "white" }}
                primary={t("Contactgegevens")}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                style={{ fontSize: 24, color: "white" }}
                primary={t("Betaling")}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemText
                style={{ fontSize: 24, color: "white" }}
                primary={t("Contactgegevens")}
              />
            </ListItemButton>
          </List>
          {/* </Box> */}
        </Wrpper>
      </PageContentainer>
    </>
  );
};

export default PageContent;
