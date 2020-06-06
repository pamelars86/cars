import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) =>{
  /*  const { images } = props
    return(
        <ul>{images.map((image,i) => <li key={i} >
            <img src={image.urls.small} alt="hola"/>
        </li>)
            
        }
        </ul>
    );*/


    const images = props.images.map((image)=> {
        return <ImageCard key={image.id} image={image}/>
    });

    return <div className="image-list">{images}</div>
}

export default ImageList;