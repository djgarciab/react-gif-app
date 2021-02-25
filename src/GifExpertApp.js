import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] =  useState(['Homer']);


    /* const handleAdd = () => {
        // setCategories([ ...categories , 'Hunter'])
        setCategories( cat => [...categories , 'Hunter']);
    } */

    return ( 
        <>
            <h2 className=" animate__animated animate__fadeIn">GifExpertApp - djgarciab@gmail.com</h2>        
            {/* <button onClick={handleAdd} >Agregar</button> */}
            <AddCategory setCategories = { setCategories } />
            <hr />
            <ol>
                { categories.map( category => (
                        <GifGrid 
                            key = {category}
                            category = {category}
                        />
                    )  
                )}
            </ol>
        </>
    )
}