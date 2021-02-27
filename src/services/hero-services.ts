import { getSuper } from "../store/ducks/heroes/saga";
import api from "./api";
console.log(getSuper)
const HeroService = {
  getSuper: (name: any) => api.get(`/${name}`)
}

export default HeroService