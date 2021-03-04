import React, { useState } from 'react'
import PropTypes from 'prop-types'
import swal from 'sweetalert';
import propTypes from 'prop-types'


const AddCategory = ({setCategories}) => {


  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e)=>{  
    setInputValue(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if( inputValue.trim().length > 2 ){

      setCategories(cat => [inputValue,...cat] )
      setInputValue('')
     
    }else{
      swal("Oops!", "Please, add something!", "info");
    }
  }

  return (
      <>
        <form onSubmit={handleSubmit} >
            <input 
            type="text"
            value={inputValue}
            placeholder='Search your gifs...'
            onChange={handleInputChange}
                  
            />       
        </form>

      </>
    
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}



export default AddCategory
