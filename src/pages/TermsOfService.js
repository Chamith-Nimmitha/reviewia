import { Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import Controls from "../components/Controls";
import { useForm, Form } from "../components/useForm";
import EmailIcon from "@material-ui/icons/Email";
import { Typography } from "@material-ui/core";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import MainImage from "../static/img/login_img.svg";
import {
  validateUserName,
  validatePassword,
  validateEmail,
} from "../components/Validators";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
    },
  },

  paper: {
    marginTop: theme.spacing(10),
  },
  paperDiv: {
    padding: `${theme.spacing(0)}px ${theme.spacing(0)}px ${theme.spacing(
      4
    )}px ${theme.spacing(0)}px !important`,
  },
  disabledSubmit: {
    backgroundColor: `${theme.palette.grey[300]} !important`,
    width: 250,
    minHeight: 50,
  },
  activeSubmit: {
    backgroundColor: "#236CC7 !important",
    width: 250,
    minHeight: 50,
  },
  loginImage: {
    [theme.breakpoints.up("md")]: {
      display: "inherit",
    },
  },
}));

const ButtonSet = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);

  return (
    <Form>
      <Grid>
        <Grid
          style={{
            // maxHeight: "100vh",
            height: "5vh",
            display: "flex",
            alignItems: "left",
            flexWrap: "wrap",
            paddingLeft: "30px",
          }}
        >
          <PlaylistAddCheckIcon />
          <Typography>Terms</Typography>
        </Grid>
        <Grid
          container
          style={{
            boxShadow: "0px 2px 2px 1px rgba(0,0,0,0.21)",
            padding: "10px",
            borderRadius: "10px",
            overflow: "auto",
          }}
        >
          <Terms />
        </Grid>
      </Grid>
      <Grid container alignItems="center">
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          style={{ marginTop: 20 }}
        >
          <Controls.Button
            text="Decline"
            onClick={() => setSelected(0)}
            style={{
              width: "20%",
              height: "100%",
              ...(selected === 0
                ? { color: "white", backgroundColor: "#236CC7" }
                : { color: "#236CC7", backgroundColor: "white" }),
            }}
            // style={{
            //   backgroundColor: "#236CC7",
            // }}
          />
          <Controls.Button
            text="Accept"
            onClick={() => setSelected(1)}
            style={{
              width: "20%",
              height: "100%",
              ...(selected === 1
                ? { color: "white", backgroundColor: "#236CC7" }
                : { color: "#236CC7", backgroundColor: "white" }),
            }}
            // style={{
            //   backgroundColor: "#236CC7",
            // }}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

const Terms =() =>{
    const classes = useStyles();
    return (
      <Grid
        item
        xs={12}
        style={{
          // maxHeight: "100vh",
          padding: "30px",
          height: "30vh",
          paddingTop: "10px",
        }}
        container
        spacing={3}
      >
        <Typography
          align="center"
          style={{
            marginTop: "10px",
            fontWeight: 400,
            fontSize: 15
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          consectetur luctus nunc, eu ultrices felis consequat sed. Etiam at
          ante sed lacus aliquam mollis sit amet vel metus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Etiam consectetur luctus nunc,
          eu ultrices felis consequat sed. Etiam at ante sed lacus aliquam
          mollis sit amet vel metus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam consectetur luctus nunc, eu ultrices felis
          consequat sed. Etiam at ante sed lacus aliquam mollis sit amet vel
          metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          consectetur luctus nunc, eu ultrices felis consequat sed. Etiam at
          ante sed lacus aliquam mollis sit amet vel metus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Etiam consectetur luctus nunc,
          eu ultrices felis consequat sed. Etiam at ante sed lacus aliquam
          mollis sit amet vel metus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam consectetur luctus nunc, eu ultrices felis
          consequat sed. Etiam at ante sed lacus aliquam mollis sit amet vel
          metus.
        </Typography>
      </Grid>
    );
}

export default function TermsOfService() {
  const [active, setActive] = useState("Accept");
  const classes = useStyles();


  return (
    <Grid container>
      <Grid item xs={1} sm></Grid>
      <Grid item xs={false} className={classes.loginImage} md={5}>
        <Grid container justifyContent="center">
          <img style={{ marginTop: 150 }} src={MainImage} />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={10} md={7} className={classes.wrapper}>
        <Controls.Paper
          className={classes.paper}
          divClassName={classes.paperDiv}
        >
          <Grid container alignItems="center">
            <Grid
              item
              xs={12}
              style={{
                backgroundColor: "#236CC7",
                boxShadow: "0px 2px 2px 1px rgba(0,0,0,0.21)",
                minHeight: 50,
              }}
            >
              <Typography
                variant="h6"
                align="center"
                style={{
                  marginTop: "10px",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                Reviewia Terms of Service
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h7"
                align="left"
                style={{
                  marginTop: "20px",
                  marginLeft: 40,
                  marginRight: 40,
                  fontWeight: 600,
                }}
                component="div"
              >
                Terms of Service
              </Typography>
              <Typography
                variant="h7"
                align="left"
                style={{
                  marginLeft: 40,
                  marginRight: 40,
                  fontWeight: 200,
                }}
                component="div"
              >
                Last updated on June 29, 2021
              </Typography>
            </Grid>
          </Grid>
          <ButtonSet />
        </Controls.Paper>
      </Grid>
      <Grid item xs={1} sm></Grid>
    </Grid>
  );
}