import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({ pictures}) {
  
        return (<ul className={css.ImageGallery}>
            {pictures.length !== 0 && pictures.map(picture => <ImageGalleryItem key={picture.id}  webformatURL={picture.webformatURL} largeImageURL={picture.largeImageURL} tags={picture.tags} />)} 
            </ul>
)
    
}

ImageGallery.propTypes = {
    pictures: PropTypes.array.isRequired,
};