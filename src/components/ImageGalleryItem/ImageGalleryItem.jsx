import React, { useState } from "react";
import PropTypes from 'prop-types';
import Modal from '../Modal';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ webformatURL, largeImageURL, tags }) { 
    
    const [showingModal, setShowingModal] = useState(false);

   const toggleModal = (event) => {
       
         setShowingModal(prev => (!prev) );  
        
    }
        return (<>
            <li className={css.ImageGalleryItem}>
            <img src={webformatURL} className={css.ImageGalleryItem_image} alt={tags} onClick={toggleModal} />
            </li>
            {showingModal && <Modal onClose={toggleModal} image={largeImageURL} tags={tags} />}
            </>
        )
} 

ImageGalleryItem.propTypes = {
         webformatURL: PropTypes.string.isRequired,
         largeImageURL: PropTypes.string.isRequired,
         tags: PropTypes.string.isRequired,
}
       



