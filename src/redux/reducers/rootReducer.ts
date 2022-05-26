import { combineReducers } from 'redux'
import { postsReducer } from './postsReducer'
import { postReducer } from './postReducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer
})

export type RootType = ReturnType<typeof rootReducer>