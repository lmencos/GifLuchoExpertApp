import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifData } from './components/GifData';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Punch Out']);

  return (
    <>
      <h3>Gif expert Lucho App</h3>
      <hr/>

      <AddCategory setCategories={ setCategories }/>

      <ol>
        {
          categories.map( category => 
            <GifData 
              category={ category }
              key={ category }
            />
          )
        }
      </ol>
    
    </>
  )
}
