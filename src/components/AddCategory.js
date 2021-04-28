import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputValue = ( e ) => {
    setInputValue( e.target.value );
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();

    if ( inputValue.trim().length > 2 ){
      setCategories( cats => [ inputValue, ...cats ]);
      setInputValue('')
    }else alert('Please enter a valid gif category')
  };

  return (
    <form onSubmit={ handleSubmit }>
      <h6 className="title">Type your Gif Category: </h6>
      <input 
        onChange={ handleInputValue }
        type="text"
        value={ inputValue }
      />
    </form>
  )
}
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}