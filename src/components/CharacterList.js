import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';


const Sbar=styled.div`
display:flex;
justify-content: center;

`
export default function CharacterList() {
  const [data, setData]=useState([]);
const [query, setQuery]=useState('');
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/').then(response =>{
      console.log( 'c log',response.data.results);
      const characters=response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase() )
      );
      setData(characters);
    }); 
    
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
<div className="characters">
      <Sbar>
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
      </Sbar>
  
    <div className="character">
     { data.map(data => {
        return (
          <div className='character-list' key={data.id}>
            <CharacterCard name={data.name} status={data.status} gender={data.gender}/>
          </div>
        )
      })} 
      </div>
   </div>
  
  );
};

