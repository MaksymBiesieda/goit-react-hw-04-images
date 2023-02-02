import React, { useState, useEffect } from "react";
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from "./Loader";
import Button from "./Button";
import css from './App.module.css';

export default function App() {
  
  const[search, setSearch] = useState('');
  const[pictures, setPictures] = useState([]);
  const[loading, setLoading] = useState(false);
  const[page, setPage] = useState(1);
  const[error, setError] = useState(null);
  const[showButton, setShowButton] = useState(false); 

   useEffect(() => {
        const pixabayKey = '30568782-28bd13ed320ba8406bed27cec';
        if(!search) {return}
        setLoading(true);
        setShowButton(true);

     fetch(`https://pixabay.com/api/?q=${search.toLowerCase()}&page=${page}&key=${pixabayKey}&image_type=photo&orientation=horizontal&per_page=12`)
       .then(response => {
         if (response.ok) {
           return response.json()
         }
         return Promise.reject(
           new Error(`Nothing've been found for ${search}`)
         );
       })
       .then(pictures => {
         setPictures(prevState => ([...prevState, ...pictures.hits]));
         if (pictures.hits.length < 12) { setShowButton(false) }
       })
       .catch(error => setError(error))
       .finally(setLoading(false))
    }, [search, page]);

 const onSubmit = (search) => {
  setSearch(search);
  setPictures([]);
  setPage(1);
  }

 const nextPage = () => {
    setPage(prevState => ( prevState + 1 ));
  }
  
    return(
    <div className={css.App}>
        <Searchbar onSubmit={onSubmit} />
        {error && <h1>{error.message}</h1>}
        <ImageGallery pictures={pictures} />
        {loading && <Loader/>}
        {showButton && <Button onClick={nextPage} />}
    </div> 
    )
};