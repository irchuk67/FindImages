import React from "react";
import './image-list.css'

const ImageList = (props) => {
    const  images = props.data.map(({description, id, urls}) => {
        return <img src={urls.regular} key={id} alt={description}/>
    })
    return(
        <div className={'image-list'}>
            {images}
        </div>
    )
}

export default ImageList;