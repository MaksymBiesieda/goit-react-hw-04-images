import PropTypes from 'prop-types';
import React, { useState } from "react";
import { FaSistrix } from 'react-icons/fa';
import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
    
    const [search, setSearch] = useState('');

   const handleChange = (event) => {
setSearch(event.currentTarget.value)
    }

   const handleSubmit = (event) => {
        event.preventDefault();
        if (search.trim() === "") {
            alert('Enter your search, please!');
            return;
        }
        onSubmit(search);
        reset();
    }
     
   const reset = () => {
        setSearch('');
    }
    
return ( <header className={css.Searchbar}>
               <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm_button}>
                  <FaSistrix />
                  <span className={css.SearchForm_button_label}>Search</span>
                  </button>

                  <input
                    className={css.SearchForm_input}
                    type="text"
                    autoComplete="off"
                    value={search}
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleChange}
                  />
               </form>
             </header>
)
    
}

Searchbar.propTypes = {
     onSubmit: PropTypes.func.isRequired,
}


