import { ActionTypes, PostItemType, PostsActionTypes } from '../types'
import { Dispatch } from 'redux'
import axios, { AxiosError } from 'axios'

export const reloadPosts = (lastPage:number) =>{
  return async(dispatch:Dispatch<PostsActionTypes>) => {
    try {
      dispatch({type: ActionTypes.FETCH_POSTS})
      let arrPosts:Array<PostItemType> = []
      for(let i = 1; i < lastPage;i++){
        const response = await axios.get(`https://api.hnpwa.com/v0/newest/${i}.json`)
        arrPosts = [...arrPosts, ...response.data]
      }
      dispatch({type: ActionTypes.RELOAD_POSTS, payload: arrPosts})
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