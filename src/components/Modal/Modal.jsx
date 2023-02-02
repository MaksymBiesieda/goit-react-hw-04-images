import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import React, { useEffect } from "react";
import css from './Modal.module.css';

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, image, tags }) {
    
    useEffect(() => {
        const keyDown = (event) => {
            if (event.code === 'Escape') {
                onClose();
            }
        }
        window.addEventListener('keydown', keyDown);
        return () => {
            window.removeEventListener('keydown', keyDown);
        };
    }, [onClose]);

    const onBackdrop = (event) => {
        if (event.currentTarget === event.target) {
            onClose(); 
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
