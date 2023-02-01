import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react";
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from "../Loader";
import Button from "../Button";
import css from './ImageGallery.module.css';

export default function ImageGallery({ search }) {
    
    const[pictures, setPictures] = useState([]);
    const[loading, setLoading] = useState(false);
    const[page, setPage] = useState(1);
    const[error, setError] = useState(null);
    const [showButton, setShowButton] = useState(false); 
    
    useEffect(() => {
        const pixabayKey = '30568782-28bd13ed320ba8406bed27cec';
        if(!search) {return}
        setLoading(true);
        setPictures([]);
        setPage(1);
        setShowButton(true);

        fetch(`https://pixabay.com/api/?q=${search}&page=${page}&key=${pixabayKey}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(
                    new Error(`Nothing've been found for ${search}`)
                );
            })
            .then(pictures => setPictures(prevState => ([...prevState, ...pictures.hits])))
            .catch(error => setError(error))
            .finally(setLoading(false))

    }, [search]);

    useEffect(() => {
        const pixabayKey = '30568782-28bd13ed320ba8406bed27cec';
        if(!search) {return}
        setLoading(true);

        fetch(`https://pixabay.com/api/?q=${search}&page=${page}&key=${pixabayKey}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(
                    new Error(`Nothing've been found for ${search}`)
                );
            })
            .then(pictures => setPictures(prevState => ([...prevState, ...pictures.hits])))
            .catch(error => setError(error))
            .finally(setLoading(false))

    }, [page]);

    const nextPage = () => {
        setPage(prevState => ( prevState + 1 ));
    }
  
        return (<>
            {error && <h1>{error.message}</h1>}
            <ul className={css.ImageGallery}>
            {pictures.length !== 0 && pictures.map(picture => <ImageGalleryItem key={picture.id} id={picture.id} webformatURL={picture.webformatURL} largeImageURL={picture.largeImageURL} tags={picture.tags} />)} 
            </ul>
            {loading && <Loader/>}
            {showButton && <Button onClick={nextPage} />}
            </>
)
    
}

ImageGallery.propTypes = {
    search: PropTypes.string.isRequired,
};