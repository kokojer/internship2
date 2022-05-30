import { PostItem } from './PostItem'
import React, { useEffect } from 'react'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector'
import { SmallPostItemType } from '../../../redux/typesPosts'
import { desiredPostsLength } from '../../../redux/store'
import { useActions } from '../../../redux/hooks/useActions'

export const Posts = () => {
    const { posts, pageToLoad } = useTypedSelector((state) => state.posts)
    const { getAllPosts } = useActions()
    useEffect(() => {
        getAllPosts(pageToLoad)
    }, [])

    return (
        <div className='d-flex flex-grow-1 flex-column gap-2 pt-2'>
            {posts.map((post: SmallPostItemType, index: number) => {
                if (index <= desiredPostsLength - 1) {
                    return (
                        <PostItem
                            key={post.id}
                            index={index + 1}
                            title={post.title}
                            user={post.user}
                            points={post.points}
                            time_ago={post.time_ago}
                            id={post.id}
                        />
                    )
                }
            })}
        </div>
    )
}
