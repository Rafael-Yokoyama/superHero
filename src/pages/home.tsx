import React from 'react'

import { useSelector } from 'react-redux'

import InputHero from '../components/InputHero'
import { ReducerHero,ItemHero } from '../store/ducks/heroes/types'


const Home = () => {


  const heroes = useSelector((state: any) => state.superHero.dataHero )


  return (

     < div> 
 
 <InputHero />
       {heroes !== undefined && heroes.map((item:any) => (
        <div key={item.id}>
        <p>{item.name}</p>
        <img src={item.image.url} alt=""/>
        </div>
      ))}
     
    </div>  
  )
}

export default Home