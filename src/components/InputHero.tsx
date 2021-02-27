import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getHeroRequest } from '../store/ducks/heroes/actions';


const InputHero =()=>{

  const dispacth = useDispatch()
const name = useRef<HTMLInputElement>(null);


    const heroSearch = () => {
      dispacth(getHeroRequest(name?.current?.value))
    }

return(
    <div>
        <input type="text" placeholder="The name of your favorite Superhero" ref={name}></input>
        <button  onClick={heroSearch}>Search</button>
    </div>
);
}

export default InputHero;