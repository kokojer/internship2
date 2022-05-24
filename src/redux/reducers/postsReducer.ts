import { ActionTypes, PostsActionTypes, PostsType } from '../types'

const initialState: PostsType = {
  posts:[],
  loading: false,
  error: null,
  pageToLoad: 1
}

export const postsReducer = (state = initialState, action: PostsActionTypes) : PostsType => {
  switch (action.type) {
    case ActionTypes.INK_PAGETOLOAD:
      return {...state, pageToLoad: ++state.pageToLoad}
    case ActionTypes.RELOAD_POSTS:
      return {loading: false, error: null, posts: [...action.payload], pageToLoad: state.pageToLoad}
    case ActionTypes.FETCH_POSTS:
      return {loading: true, error: null, posts: [...state.posts], pageToLoad: state.pageToLoad}
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return {loading: false, error: null, posts: [...state.posts, ...action.payload], pageToLoad: state.pageToLoad}
    case ActionTypes.FETCH_POSTS_ERROR:
      return {loading: false, error: action.payload, posts: [...state.posts], pageToLoad: state.pageToLoad}
    default:
      return state
  }
}