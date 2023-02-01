import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import React, { useEffect } from "react";
import css from './Modal.module.css';

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, image, tags }) {
    
    useEffect(() => {
        window.addEventListener('keydown', keyDown);
    })

    const keyDown = (event) => {
        if (event.code === 'Escape') {
            onClose();
            window.removeEventListener('keydown', keyDown);
        }
    }

    const onBackdrop = (event) => {
        if (event.currentTarget === event.target) {
            onClose(); 
            window.removeEventListener('keydown', keyDown);
        }
    }

 return (createPortal(<div className={css.Overlay} onClick={onBackdrop}>
  <div className={css.Modal}>
    <img src={image} alt={tags} />
  </div>
</div>, modalRoot) )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}
