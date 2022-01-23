import React from "react";
import { PageContentainer, Wrpper } from "./ContentElements";
import { useTranslation } from "react-i18next";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import EmailIcon from "@mui/icons-material/Email";
import Chip from "@mui/material/Chip";
import MdPhone from "@mui/icons-material/Phone";

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
    // t("Contactgegevens"),
    // t("e-mmail"),
  ];

  let content = [];
  terms.map((t, index) => {
    content.push(
      <ListItemButton>
        <ListItemText
          style={{ fontSize: 24, color: "#260513" }}
          primary={index + 1 + ") " + t}
        />
      </ListItemButton>
    );
  });

  console.log(terms);

  return (
    <>
      <PageContentainer>
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
                  color: "#260513",
                }}
              >
                {t("algemene")}
              </ListSubheader>
            }
          >
            {content}
            <ListItemButton>
              <ListItemText
                style={{ fontSize: 24, color: "#260513" }}
                // primary={"11) "}
              >
                10) {t("ccc")}
                <Chip
                  icon={<MdPhone style={{ color: "black" }} />}
                  label="Telefoon: "
                  style={{ color: "black" }}
                />
                06 11 07 84 03
                <Chip
                  icon={<EmailIcon style={{ color: "black" }} />}
                  label="E-mail:"
                  style={{ color: "black" }}
                />
                fsucces30@hotmail.com
              </ListItemText>
            </ListItemButton>
          </List>
        </Wrpper>
      </PageContentainer>
    </>
  );
};

export default PageContent;
