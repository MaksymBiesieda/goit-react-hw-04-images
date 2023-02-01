import React, { useState } from "react";
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import css from './App.module.css';

export default function App() {
  
  const [search, setSearch] = useState('');

 const onSubmit = (search) => {
   setSearch(search);
  }
  
    return(
    <div className={css.App}>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery search={search.toLowerCase()} />
    </div> 
    )
};