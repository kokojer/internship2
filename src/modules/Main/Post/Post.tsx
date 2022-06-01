import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import { Comments } from './comments/Comments'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useEffect } from 'react'
import { getPostInfo } from '../../../redux/actionCreators/getPostInfo'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'

const ArticleStyled = styled.article`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #d0d0d0;
    box-shadow: 0 0 2px 5px #817b7b;
    padding: 1rem;
    min-height: 259px;
    margin-bottom: 1rem;
    @media (max-width: 766px) {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    @media (max-width: 400px) {
        margin-bottom: 0;
        margin-top: 0.5rem;
    }
`

const TitlePost = styled.h1`
    font-size: 40px;
    margin-bottom: 0.5rem;
    @media (max-width: 1050px) {
        font-size: 30px;
    }
    @media (max-width: 400px) {
        text-align: center;
        font-size: 24px;
    }
`

const InfoPost = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    @media (max-width: 400px) {
        flex-direction: column;
    }
`

const InfoPostItem = styled.div`
    margin-right: 1rem;
    @media (max-width: 766px) {
        font-size: 0.75rem;
    }
    @media (max-width: 400px) {
        margin-right: 0;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }
`

const ReadMoreButton = styled.a`
    @media (max-width: 1050px) {
        font-size: 0.75rem;
    }
    @media (max-width: 400px) {
        font-size: 1rem;
        width: 100%;
    }
`

const PostContent = styled.div`
    word-break: break-word;
    @media (max-width: 1050px) {
        font-size: 0.75rem;
        p {
            margin-bottom: 0.5rem;
        }
    }
    @media (max-width: 400px) {
        text-align: center;
    }
`

export const Post = () => {
    const { id } = useParams()
    const { post, loading, error } = useTypedSelector((state) => state.post)
    const dispatch = useDispatch()
    const bindGetPostInfo = bindActionCreators(getPostInfo, dispatch)
    useEffect(() => {
        id ? bindGetPostInfo(+id, false) : ''
    }, [])
    const htmlContent = post?.content
        ? new DOMParser().parseFromString(post?.content, 'text/html').body.innerHTML
        : ''
    return (
        <ArticleStyled>
            {error ? (
                <div className='text-center fw-bold my-auto'>{error}</div>
            ) : loading ? (
                <Spinner animation='grow' variant='dark' className='text-center m-auto' />
            ) : (
                <>
                    <TitlePost>{post?.title}</TitlePost>
                    <InfoPost>
                        <InfoPostItem>{`Author: ${post?.user}`}</InfoPostItem>
                        <InfoPostItem>{`Date: ${post?.time_ago}`}</InfoPostItem>
                        <ReadMoreButton
                            className='btn btn-success'
                            rel='noreferrer'
                            href={post?.url}
                            target='_blank'
                            role='button'
                        >
                            Read More
                        </ReadMoreButton>
                    </InfoPost>
                    <PostContent>{parse(htmlContent)}</PostContent>
                    <Comments comments={post.comments} commentsCounter={post?.comments_count} />
                </>
            )}
        </ArticleStyled>
    )
}
