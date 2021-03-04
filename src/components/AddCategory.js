import React, { useState } from 'react'
import PropTypes from 'prop-types'
import swal from 'sweetalert';
import propTypes from 'prop-types'


const AddCategory = ({setCategories}) => {


  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e)=>{  
    setInputValue(e.target.value)
    console.log("Llamando onchange")
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if( inputValue.trim().length > 2 ){

      //This line is to test (show error without beforeEach())
      console.log('handleSubmit (for test)', inputValue)

      setCategories(cat => [inputValue,...cat] )
      setInputValue('')
     
    }else{
      swal("Oops!", "Please, add something!", "info");
    }
  }

  return (
      <>
        <form onSubmit={handleSubmit} >
          <p>{inputValue} </p>
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
