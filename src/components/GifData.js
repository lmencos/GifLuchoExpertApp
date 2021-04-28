import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem';

export const GifData = ( { category } ) => {

  const { data:images, loading } = useFetchGifs( category );

  console.log(loading);

  return (
    <>
    <h4>{ category }</h4>

    { loading && <p className=" flag animate__animated animate__bounce">Loading 12 gifs of: { category }</p> }

    <div className="card-grid">
      {
        images.map( img => 
          <GifItem 
            key={ img.id }
            {...img}
          />
        )
      }
    </div>
    </>
  )
}
