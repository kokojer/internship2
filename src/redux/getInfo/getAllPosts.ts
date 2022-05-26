import { ActionTypesPosts, SmallPostItemType, PostsActionTypes } from '../typesPosts'
import { Dispatch } from 'redux'
import axios, { AxiosError } from 'axios'

export const getAllPosts = (lastPage:number) =>{
  return async(dispatch:Dispatch<PostsActionTypes>) => {
    try {
      dispatch({type: ActionTypesPosts.FETCH_POSTS})
      let arrPosts:Array<SmallPostItemType> = []
      for(let i = 1; i < lastPage;i++){
        const response = await axios.get(`https://api.hnpwa.com/v0/newest/${i}.json?no-cache=${new Date()}`)
        arrPosts = [...arrPosts, ...response.data]
      }
      dispatch({type: ActionTypesPosts.RELOAD_POSTS, payload: arrPosts})
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