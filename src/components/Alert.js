import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import NotificationContext from "../context/notificationContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40vw",
    position: "fixed",
    left: "50%",
    transform: "translate(-50%)",
    zIndex: "10000",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },

    "@media (max-width: 450px)": {
      width: "80vw",
    },
  },
}));

const Alert = () => {
  const classes = useStyles();

  const notificationContext = useContext(NotificationContext);
  const { isAlertOpen, closeAlert, alertContent } = notificationContext;

  return (
    <div className={classes.root}>
      <Collapse in={isAlertOpen}>
        <MaterialAlert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={closeAlert}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {alertContent}
        </MaterialAlert>
      </Collapse>
    </div>
  );
};

export default Alert;
