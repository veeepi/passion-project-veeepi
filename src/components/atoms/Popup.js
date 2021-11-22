import React from "react";
import { modalStyles } from "../../styles/dashStyles";
// import { TiUserAdd } from "react-icons/ti";
import { Backdrop, Box, IconButton, Fade, Modal } from "@material-ui/core";

export default function Popup({ open, setOpen, user, content, icon }) {
  const classes = modalStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box classeName={classes.container}>
      <IconButton onClick={handleOpen} className={classes.iconButton}>
        {/* <TiUserAdd className={classes.icon} size={48} /> */}
        {icon}
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content}
          {/* <UserConnections dataUser={user} /> */}
        </Fade>
      </Modal>
    </Box>
  );
}
