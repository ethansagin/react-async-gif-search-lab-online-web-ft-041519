import React from 'react'

const GifList = ({images}) => {
    console.log(images)
    return(
        <div className="list">
            {images.map(i => {
                return <img src={i} alt="" />
            })}
        </div>
    )
}

export default GifList