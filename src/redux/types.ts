export enum ActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
  RELOAD_POSTS = 'RELOAD_POSTS',
  INK_PAGETOLOAD = 'INK_PAGETOLOAD'
}

export interface PostItemType {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time?: number;
  time_ago: string;
  comments_count?: number;
  type?: string;
  url?: string;
  domain?: string;
  index?:number;
}

interface FetchPostsType{
  type: ActionTypes.FETCH_POSTS,
}
interface FetchPostsSuccessType{
  type: ActionTypes.FETCH_POSTS_SUCCESS,
  payload:Array<PostItemType>
}
interface FetchPostsErrorType{
  type: ActionTypes.FETCH_POSTS_ERROR,
  payload: string
}

interface DeletePostsType{
  type: ActionTypes.RELOAD_POSTS,
  payload: Array<PostItemType>
}

interface InkPageToLoadType{
  type: ActionTypes.INK_PAGETOLOAD
}

export interface PostsType{
  posts: Array<PostItemType>,
  loading: boolean,
  error: null | string,
  pageToLoad: number
}

export type PostsActionTypes = FetchPostsErrorType | FetchPostsSuccessType | FetchPostsType | DeletePostsType | InkPageToLoadType
