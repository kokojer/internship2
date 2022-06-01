export enum ActionTypesPost {
    FETCH_POST = 'FETCH_POST',
    FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
    FETCH_POST_ERROR = 'FETCH_POST_ERROR',
    DELETE_POST = 'DELETE_POST',
}

export interface BigPostItemType {
    id: number
    title: string
    points: number | null
    user: string | null
    time: number
    time_ago: string
    content: string
    deleted?: boolean
    dead?: boolean
    type: string
    url?: string
    domain?: string
    comments: Array<BigPostItemType>
    level: number
    comments_count: number
}

interface FetchPostType {
    type: ActionTypesPost.FETCH_POST
}
interface FetchPostSuccessType {
    type: ActionTypesPost.FETCH_POST_SUCCESS
    payload: BigPostItemType
}
interface FetchPostErrorType {
    type: ActionTypesPost.FETCH_POST_ERROR
    payload: string
}

export interface PostType {
    post: BigPostItemType
    loading: boolean
    error: null | string
}

export type PostActionTypes = FetchPostErrorType | FetchPostSuccessType | FetchPostType
