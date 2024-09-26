import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SignIn from "../SignIn"; // Importar el componente SignIn
import PropTypes from "prop-types";

export default function Option({ open, onClose }) {
  const [openSignIn, setOpenSignIn] = useState(false);

  const handleActionClick = (action) => {
    if (action === "login") {
      setOpenSignIn(true);
    } else if (action === "guest") {
      console.log("Continue as guest");
      onClose();
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* Dialog title */}
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "1.2rem",
            marginTop: "1rem",
          }}
        >
          {"Would you like to continue as a guest?"}
        </DialogTitle>

        {/* Dialog content */}
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 400,
              fontSize: "0.95rem",
            }}
          >
            To complete your reservation, you can either continue as a guest or
            log in to access additional benefits.
          </DialogContentText>
        </DialogContent>

        {/* Dialog actions */}
        <DialogActions
          sx={{
            marginBottom: "1rem",
          }}
        >
          <Button
            onClick={() => {
              window.location.href = "/reservation";
            }}
            variant="outlined"
            sx={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              height: "40px",
            }}
          >
            Continue as Guest
          </Button>
          <Button
            onClick={() => handleActionClick("login")}
            variant="contained"
            autoFocus
            sx={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 800,
              fontSize: "0.8rem",
              height: "40px",
              width: "100px",
              backgroundColor: "#FEA116",
              borderColor: "#FEA116",
            }}
          >
            Log In
          </Button>
        </DialogActions>
      </Dialog>
      <SignIn open={openSignIn} onClose={() => setOpenSignIn(false)} />
    </>
  );
}

Option.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
