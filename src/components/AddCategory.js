import React,{useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ( {setCategories} ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        // console.log(e.target.value);
        setInputValue( e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log('Submit hecho');
        // trim para borrar espacios en blanco antes y despues
        if(inputValue.trim().length > 2 ) {
            setCategories( cat => [inputValue, ...cat  ]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            {/* <h2>{inputValue}</h2> */}
            <input 
                type="text"
                value = {inputValue}
                onChange = {handleInputChange}
                placeholder="Search here"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
