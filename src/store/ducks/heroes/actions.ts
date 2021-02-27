

    
import { action } from "typesafe-actions"
import { ReducerHero, SuperTypes } from "./types"


export const getHeroRequest = (heroes: any) => action(SuperTypes.GET_HERO_REQUEST, heroes)

export const loadHeroSuccess = (data: ReducerHero[]) => action(SuperTypes.GET_HERO_SUCCESS, data)

export const loadHeroFailure = () => action(SuperTypes.GET_HERO_FAILURE)