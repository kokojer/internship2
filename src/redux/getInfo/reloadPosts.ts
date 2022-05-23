import { ActionTypes, PostsActionTypes } from '../types'
import { Dispatch } from 'redux'
import axios from 'axios'


export const reloadPosts = (lastPage:number) =>{

  return async(dispatch:Dispatch<PostsActionTypes>) => {
    try {
      dispatch({type: ActionTypes.DELETE_POSTS})
      dispatch({type: ActionTypes.FETCH_POSTS})
      console.log(`last page ${lastPage}`)
      for(let i = 1; i < lastPage;i++){
        const response = await axios.get(`https://api.hnpwa.com/v0/newest/${i}.json`)
        console.log('for')
        dispatch({type: ActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
      }
      dispatch({type: ActionTypes.INK_PAGETOLOAD})
    }catch (err:any){
      console.log(err)
      dispatch({type: ActionTypes.FETCH_POSTS_ERROR, payload: err})
    }
  }
}