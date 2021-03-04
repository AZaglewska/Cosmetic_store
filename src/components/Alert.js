import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import CosmeticStoreContext from "../context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "absolute",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = () => {
  const classes = useStyles();

  const context = useContext(CosmeticStoreContext);
  const { isAlertOpen, closeAlert, alertContent } = context;

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
