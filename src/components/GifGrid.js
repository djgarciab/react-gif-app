import React/* , { useState,  useEffect} */ from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({category}) => {

    //const state = useFetchGifs();
    //console.log(state);
//desestructuracion
    // const { data, loading } = useFetchGifs();
    // console.log(data);

    const { data:imgs , loading } = useFetchGifs( category );
    // console.log(loading);



/* 
     const [ images, setImages] =  useState([]);

    // useEffect para poner condiciones que se ejecute algo
    useEffect( () => {
        getGifs(category)
        .then( setImages)// es lo mismo que  .then( imgs=> setImages(imgs) )
    }, [ category ]) // [] para que se ejecute una sola vez
 */
    return (
        <>
        <h3 className=" animate__animated animate__fadeIn" >{category}</h3>

        {/* { loading ?  'Cargando ...' : 'Data cargada' } */}
        { loading && <p className=" animate__animated animate__flash" >Loading ...</p> }

        <div  className="card-grid">                    
                {
                    imgs.map( img => (
                
                         <GifGridItem 
                         key = {img.id}
                         // img = {img} 
                         { ...img }
                         />
                    ))
                }            
        </div>
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid
