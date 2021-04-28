import React from 'react'

export const GifItem = ( img ) => {
  
  console.log(img);
  
  return (
    <div className="card animate__animated animate__backInUp">
      <img 
        src={ img.imageUrl } 
        alt={ img.title }
      />
      <p>{ img.title }</p>
    </div>
  )
}
