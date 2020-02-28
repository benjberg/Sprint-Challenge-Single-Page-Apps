import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [data, setData]=useState([]);
const [query, setQuery]=useState('');
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/').then(response =>{
      console.log( 'c log2',response.data.results);
      const locations=response.data.results.filter(location => location.location.toLowerCase().includes(query.toLowerCase() )
      );
      setData(locations);
    }); 
    
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
<div className="location">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      
  
    <div className="location">
     { data.map(data => {
        return (
          <div className='location-list' key={data.id}>
            <LocationCard name={data.name} type={data.type} dimension={data.dimension}/>
          </div>
        )
      })} 
      </div>
   </div>
  
  );
};

