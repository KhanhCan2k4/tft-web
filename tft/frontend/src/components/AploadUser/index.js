import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

export default function ApploadUser({ user, rank }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        className="appload-user"
      >
        <Tooltip title={"Top " + rank}>
          <div className={"rank rank-" + rank}></div>
          <img className="avatar" src="./src/users/user-1.png" alt="avatar" />
        </Tooltip>
        {open && <Modal />}
      </div>
    </>
  );
}

function Modal() {
  return (
    <div className="appload-user-modal">
      <h5 className="modal-title" id="exampleModalLabel">
        <i>Sinh viên</i>
        <br /> <b>Nguyễn Văn A</b>
      </h5>
      <hr />

      <p className="modal-body">
        {`Dialog: the parent component that renders the modal. Dialog Title: a
        wrapper used for the title of a Dialog. Dialog Actions: an optional
        container for a Dialog's Buttons. Dialog Content: an optional container
        for displaying the Dialog's content. Dialog Content Text: a wrapper for
        text inside of <DialogContent />. Slide: optional Transition used to
        slide the Dialog in from the edge of the screen`}
      </p>
    </div>
  );
}
