import { useEffect, useState} from 'react'
import './hero.css'




const Hero = ({title, poster_path}) => {
  // console.log(poster_path)
 
  // const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/'

  const getPosterUrl = (posterpath) => {
    return `http://image.tmdb.org/t/p/w500/${posterpath}`
  }
  return (
    <>
      {/* <div className='wrapper'>
        <div className="content">
          <div className="text">
            <h1>{title}</h1>
            <p>{title}</p>
          </div>
        </div>
        
      </div> */}
      <img src="../../images/tmdb_logo.svg" alt="" />
     
    </>
        // <p>{title}</p>
        // <img src={getPosterUrl(poster_path)} alt={title} className='img'/>
        
  )
}

export default Hero