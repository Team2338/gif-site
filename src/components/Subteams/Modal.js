import React from "react";
import ReactDOM from "react-dom";
import {Close} from "@material-ui/icons";
import './subteams.scss';

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '60px',
    borderRadius: '5px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function Modal({open, onClose, children}) {
    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLE}>
                <button className="close-button" onClick={onClose}><Close /></button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}