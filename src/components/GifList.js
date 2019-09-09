import React from 'react'

const GifList = ({images}) => {
    return(
        <div className="list">
            {images.map(i => {
                <img src={i} alt="" />
            })}
        </div>
    )
}

export default GifList