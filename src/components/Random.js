import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';
import Spinner from './Spinner';
import axios from 'axios';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
function Random() {
  const[gif,setgif]=useState("");
  const[Loader,SetLoader]=useState(true);
  

  async function fetchData(){
    SetLoader(true)
    
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const {data} = await axios.get(url);
      const imageSource= data.data.images.downsized_large.url;
      setgif(imageSource);
    


    SetLoader(false);

  }
  useEffect(()=>{
    fetchData();
  },[]);


  function clickHandler(){
    fetchData();
  }
  return (
    <div className='w-1/2  relative rounded-lg border border-slate-600 flex flex-col items-center justify-center gap-y-5 mt-[15px] bg-green-500'>
    
      <h1 className=' underline text-2xl uppercase font-bold mt-[15px]'>Random Gif</h1>
      
     
     {
        Loader?(<Spinner/>):(<img src={gif} width="450"/>)
      }
    
    
      <button className='w-10/12 mb-[15px]  flex justify-center items-center bg-yellow-400 text-lg py-2 rounded-lg '  onClick={clickHandler}>
        Generate
      </button>
      
      
    </div>
  )
}

export default Random