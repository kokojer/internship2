import { ActionTypesPosts, PostsActionTypes } from '../typesPosts'
import { Dispatch } from 'redux'
import axios, { AxiosError } from 'axios'

export const getMorePosts = (page:number) =>{
  return async(dispatch:Dispatch<PostsActionTypes>) => {
    try {
      dispatch({type: ActionTypesPosts.FETCH_POSTS})
      const response = await axios.get(`https://api.hnpwa.com/v0/newest/${page}.json?no-cache=${new Date()}`)
      if(response.data.length === 0){
        throw new Error('THERE IS NO MORE NEWS')
      }
      dispatch({type: ActionTypesPosts.FETCH_POSTS_SUCCESS, payload: response.data})
      dispatch({type: ActionTypesPosts.INK_PAGETOLOAD})
    }catch (err){
      if(typeof err === 'string'){
        dispatch({type: ActionTypesPosts.FETCH_POSTS_ERROR, payload: err})
      }
      if(err instanceof AxiosError){
        dispatch({type: ActionTypesPosts.FETCH_POSTS_ERROR, payload: err.toString()})
      }
    }
  }
}