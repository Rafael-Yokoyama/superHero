import { combineReducers } from "redux"
import reducerSuperHero from "./heroes"

const createRootReducer = () => combineReducers({
  superHero: reducerSuperHero
})

export default createRootReducer