import { Fragment } from "react";
import ReactDom from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modaloverlay")
      )}
    </Fragment>
  );
};

export default Modal;
