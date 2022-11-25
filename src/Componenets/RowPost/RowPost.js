import React,{useState,useEffect} from 'react'
import {imgUrl,Api_key} from "../../constant/constant"
import axios from '../axios'
import "./RowPost.css";
import Youtube from "react-youtube";

function RowPost(props) {

    const [Movies,setMovies] = useState([]);
    const [urlid,setUrlid] = useState()
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results);

        }).catch(err=>{
            console.log(err);
        })

    },[props])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    }

    const handleMovie = (id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${Api_key}&language=en=us`).then((response)=>{
  console.log(response);
  if(response.data.results !== 0){
    setUrlid(response.data.results[0])
  }else{
  console.log("trailer not available");
  }
})
    }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
       {Movies.map((obj)=>{     
           return (
           <img onClick={()=>{handleMovie(obj.id)}} className={props.isSmall ? "small_poster" : "poster"} alt="poster" src={`${imgUrl + obj.backdrop_path}`}/> 
           )
       })
       }
      </div>
     { urlid &&  <Youtube videoId={urlid.key} opts={opts} />
        
      }
    

    </div>
  )
}

export default RowPost
