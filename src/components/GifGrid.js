import React from 'react'
/* import getGifs from '../helpers/getGifs' */
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
/* import { Ring } from 'react-awesome-spinners' */
import PropTypes from 'prop-types'



const GifGrid = ({category}) => {

  //Here Custom Hooks
  //Desestructure object from customs hooks
  const {data:images, loading} = useFetchGifs(category)

  return (
      <>
          <h3>{category}</h3>
          {loading && <p className='animate__animated animate__flash'>Loading...</p> }

          <div className="card-grid" >
        
              {
                //Tomamos array img(tiene la info) y desestrucutamos (id, title, url)
                images.map( ({id, title, url}) => {
                  return (
                 <div key={id}>
                      <GifGridItem 
                        id={id}
                        title={title}
                        url={url}
                        key={id}
                        /> 
                   
                 </div>
                  )
                }
                
                )
              }         
        </div>
      </>
  )
}
/* { ...img }
key={img.id} */

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,

}

export default GifGrid
