import { SuperTypes } from "./types"



const initialState: any = {
  dataHero: [],
  loading: false,
  error: false
}

function reducerSuperHero(state = initialState, action: any) {
  switch (action.type) {

    case SuperTypes.GET_HERO_REQUEST:
      return { ...state, loading: true }

    case SuperTypes.GET_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        dataHero: action.payload.data.results
      }
      
    case SuperTypes.GET_HERO_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}


export default reducerSuperHero