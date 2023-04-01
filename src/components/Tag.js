import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';
import Spinner from './Spinner';
import axios from 'axios';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
function Tag() {
  // these all two states 
  const[tag,settag]=useState("");
 
  
  const[gif,setgif]=useState("");
  const[Loader,SetLoader]=useState(true);
  

  async function fetchData(){
    SetLoader(true)
    
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

  function changeHandler(event){
    settag(event.target.value)

  }
  function submitHandler(event){
    event.preventDefault();
  }

  
  return (
    <div className='w-1/2  relative rounded-lg border border-slate-600 flex flex-col items-center justify-center gap-y-5 mt-[15px] bg-blue-500'>
    
      <h1 className=' underline text-2xl uppercase font-bold mt-[15px]'>A Random { tag } Gif</h1>
      
     
     {
        Loader?(<Spinner/>):(<img src={gif} width="450"/>)
      }
    
<form onSubmit={submitHandler} className='w-full flex flex-col items-center gap-y-2' >
      <input
      className='w-10/12 text-lg py-2 rounded-lg '
      placeholder='Search your Gif'
      onChange={changeHandler}
      value={tag}
      />
    
  
      <button className='w-10/12 mb-[15px]  flex justify-center items-center bg-yellow-400 text-lg py-2 rounded-lg '  onClick={clickHandler}>
        Generate
      </button>
     
      </form>
    </div>
  )
}

export default Tag