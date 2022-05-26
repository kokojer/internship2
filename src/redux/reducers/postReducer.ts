import { ActionTypesPost, PostActionTypes, PostType } from '../typesPost'

const initialState: PostType = {
  post:null,
  loading: false,
  error: null
}

export const postReducer = (state = initialState, action: PostActionTypes) : PostType => {
  switch (action.type) {
    case ActionTypesPost.DELETE_POST:
      return {loading: false, error: null, post: null}
    case ActionTypesPost.FETCH_POST:
      return {loading: true, error: null, post: state.post}
    case ActionTypesPost.FETCH_POST_SUCCESS:
      return {loading: false, error: null, post: action.payload}
    case ActionTypesPost.FETCH_POST_ERROR:
      return {loading: false, error: action.payload, post: state.post}
    default:
      return state
  }
}