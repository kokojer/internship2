import { ActionTypes, PostsActionTypes } from '../types'
import { Dispatch } from 'redux'
import axios, { AxiosError } from 'axios'

export const fetchPosts = (page:number) =>{
  return async(dispatch:Dispatch<PostsActionTypes>) => {
    try {
      dispatch({type: ActionTypes.FETCH_POSTS})
      const response = await axios.get(`https://api.hnpwa.com/v0/newest/${page}.json`)
      if(response.data.length === 0){
        throw new Error('THERE IS NO MORE NEWS')
      }
      dispatch({type: ActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
      dispatch({type: ActionTypes.INK_PAGETOLOAD})
    }catch (err){
      if(typeof err === 'string'){
        dispatch({type: ActionTypes.FETCH_POSTS_ERROR, payload: err})
      }
      if(err instanceof AxiosError){
        dispatch({type: ActionTypes.FETCH_POSTS_ERROR, payload: err.toString()})
      }
    }
  }
}