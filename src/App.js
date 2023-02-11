import React from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from "./search.svg";

// fdacecb9

const API_URL ='http://www.omdbapi.com?apikey=fdacecb9';

const movie1= {

  "Title": "Spiderman the Verse",
   "Type": "series",
   "Year": "2019–",
   "imdbID": "tt12122034"
}

const App = () =>{

  const searchMovies =async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search)

  }

    useEffect(()=>{
        searchMovies('Spiderman');
    },[]);


  return (
   <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder='Search for movies' value='superman' onChange={()=>{}}/>
        <img 

          src={SearchIcon}
          alt="search"
          onClick={()=>{}}
        
        />
   </div>
   <div className='container'>

   </div>
   </div>

  

  );
}

export default App;