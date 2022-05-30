import * as GetAllPosts from './getAllPosts'
import * as GetMorePosts from './getMorePosts'
import * as GetPostInfo from './getPostInfo'

export default {
    ...GetPostInfo,
    ...GetMorePosts,
    ...GetAllPosts,
}
