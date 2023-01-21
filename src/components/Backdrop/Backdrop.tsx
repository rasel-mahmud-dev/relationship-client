import React, {FC} from "react";
import { createPortal } from "react-dom";

import "./backdrop.css";

interface BackdropProps {
    isOpen: boolean,
    backdropClass?: string,
    onClose?: ()=>void,
    children?: React.ReactNode
}

const Backdrop: FC<BackdropProps> = ({ isOpen, backdropClass="", onClose, children }) => {
    return createPortal(
        <div onClick={onClose}
            className={`backdrop ${backdropClass} ${
                isOpen ? "open-backdrop" : "close-backdrop"
            }`}
        >
            {children}
        </div>,
        document.getElementById("backdrop-root") as HTMLDivElement
    );
};

export default Backdrop;