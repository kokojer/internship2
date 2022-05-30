export enum ActionTypesPosts {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    RELOAD_POSTS = 'RELOAD_POSTS',
    INK_PAGETOLOAD = 'INK_PAGETOLOAD',
}

export interface SmallPostItemType {
    id: number
    title: string
    points?: number | null
    user?: string | null
    time?: number
    time_ago: string
    comments_count?: number
    type?: string
    url?: string
    domain?: string
    index?: number
}

export interface FetchPostsType {
    type: ActionTypesPosts.FETCH_POSTS
}
interface FetchPostsSuccessType {
    type: ActionTypesPosts.FETCH_POSTS_SUCCESS
    payload: Array<SmallPostItemType>
}
interface FetchPostsErrorType {
    type: ActionTypesPosts.FETCH_POSTS_ERROR
    payload: string
}

interface ReloadPostsType {
    type: ActionTypesPosts.RELOAD_POSTS
    payload: Array<SmallPostItemType>
}

interface InkPageToLoadType {
    type: ActionTypesPosts.INK_PAGETOLOAD
}

export interface PostsType {
    posts: Array<SmallPostItemType>
    loading: boolean
    error: null | string
    pageToLoad: number
}

export type PostsActionTypes =
    | FetchPostsErrorType
    | FetchPostsSuccessType
    | FetchPostsType
    | ReloadPostsType
    | InkPageToLoadType
