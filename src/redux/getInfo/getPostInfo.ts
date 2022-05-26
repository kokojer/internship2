import { ActionTypesPost, BigPostItemType, PostActionTypes } from '../typesPost'
import { Dispatch } from 'redux'
import axios, { AxiosError } from 'axios'

export const getPostInfo = (id:number) =>{
  return async(dispatch:Dispatch<PostActionTypes>) => {
    try {
      dispatch({type: ActionTypesPost.FETCH_POST})
      const response = await axios.get(`https://api.hnpwa.com/v0/item/${id}.json`)
      dispatch({type: ActionTypesPost.FETCH_POST_SUCCESS, payload: response.data})
    }catch (err){
      if(typeof err === 'string'){
        dispatch({type: ActionTypesPost.FETCH_POST_ERROR, payload: err})
      }
      if(err instanceof AxiosError){
        dispatch({type: ActionTypesPost.FETCH_POST_ERROR, payload: err.toString()})
      }
    }
  }
}