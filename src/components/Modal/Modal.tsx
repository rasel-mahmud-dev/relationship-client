import React, {FC} from "react";
import { createPortal } from "react-dom";

import "./styles.css";
import Backdrop from "../Backdrop/Backdrop";

interface BackdropProps {
    isOpen: boolean,
    className?: string,
    onClose?: ()=>void,
    children?: React.ReactNode
}


const Modal: FC<BackdropProps> = ({ isOpen, className="", onClose, children }) => {
    return createPortal(
        <div>
            <Backdrop isOpen={isOpen} onClose={onClose} />
            <div
                className={`modal ${className} ${
                    isOpen ? "open-modal" : "close-modal"
                }`}
            >
                {children}
            </div>
        </div>,
        document.getElementById("modal-root") as HTMLDivElement
    );
};

export default Modal;
