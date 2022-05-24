import { PostItem } from './PostItem'
import { useDispatch} from 'react-redux'
import React, { useEffect } from 'react'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector'
import { fetchPosts } from '../../../redux/getInfo/getPosts'
import { bindActionCreators } from 'redux'
import { PostItemType } from '../../../redux/types'
import { desiredPostsLength } from '../../../redux/store'

export const Posts = () => {

  const {posts, pageToLoad} = useTypedSelector(state => state.posts)
  const dispatch = useDispatch()
  const bindFetchPosts = bindActionCreators(fetchPosts, dispatch)
  useEffect(() => {
    bindFetchPosts(pageToLoad)
  }, [])

  return (
    <div className='d-flex flex-grow-1 flex-column gap-2 pt-2'>
      {posts.map((post: PostItemType, index:number) => {
        if(index <= desiredPostsLength - 1){
          return <PostItem key={post.id} index={index + 1} title={post.title} user={post.user} points={post.points} time_ago={post.time_ago} id={post.id} />
        }
      })}
    </div>
  );
}
