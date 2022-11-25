import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../axios';
import { Api_key,imgUrl} from '../../constant/constant';

function Banner() {
    const [Movie,setMovie] = useState();
 useEffect(()=>{
     axios.get(`trending/all/week?api_key=${Api_key}&language=en-US`).then((response)=>{
         let random = Math.floor(Math.random()*20);
         setMovie(response.data.results[random]);
     })
 },[])

  return (
    <div style={{backgroundImage:`url(${Movie ? imgUrl+Movie.backdrop_path : " "})`}} className= "banner">
      <div className="content">
          <h1 className="title">{Movie ? Movie.title : " "}</h1>
          <div className="banner_buttons">
              <button className="button">Play</button>
              <button className="button">My List</button>
              
          </div>
          <h1 className="description">{Movie ? Movie.overview : " "}</h1>
          

      </div>
      <div className="fade">
              
          </div>
    </div>
  )
}

export default Banner
