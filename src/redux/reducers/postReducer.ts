import { ActionTypesPost, BigPostItemType, PostActionTypes, PostType } from '../typesPost'

const initialState: PostType = {
  post: {} as BigPostItemType,
  loading: false,
  error: null
}

export const postReducer = (state = initialState, action: PostActionTypes) : PostType => {
  switch (action.type) {
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