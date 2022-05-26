import styled from 'styled-components'
import { Button, Spinner } from 'react-bootstrap'
import { Comments } from './Comments'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useEffect } from 'react'
import { getPostInfo } from '../../../redux/getInfo/getPostInfo'
import { useParams } from 'react-router-dom'
import Parser from 'html-react-parser';

const ArticleStyled = styled.article`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #d0d0d0;
  box-shadow: 0px 0px 2px 5px #817b7b;
  padding: 1rem;
`

const TitlePost = styled.h1`
  font-size: 40px;
  margin-bottom: 0.5rem;
`

const InfoPost = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const InfoPostItem = styled.div`
  margin-right: 1rem;
`

export const Post = () => {
  const {id} = useParams()
  const {post,loading,error} = useTypedSelector(state => state.post)
  const dispatch = useDispatch()
  const bindGetPostInfo = bindActionCreators(getPostInfo, dispatch)

  useEffect(() => {
    id ? bindGetPostInfo(+id) : ''
  }, [])
  const htmlContent = post?.content ? new DOMParser().parseFromString(post?.content, "text/html").body.innerHTML : ''
  return (
        <ArticleStyled>
          {error ? (
            <div>Error</div>
          ):(
            <>
              <TitlePost>
                {loading ? <Spinner animation="grow" variant="dark" /> : post?.title}
              </TitlePost>
              <InfoPost>
                <InfoPostItem>
                  {loading ? <Spinner animation="grow" variant="dark" /> : `Author: ${post?.user}`}
                </InfoPostItem>
                <InfoPostItem>
                  {loading ? <Spinner animation="grow" variant="dark" /> : `Date: ${post?.time_ago}`}
                </InfoPostItem>
                <a className="btn btn-success" href={post?.url} target='_blank' role="button">Read More</a>
              </InfoPost>
              <div>
                {loading ? <Spinner animation="grow" variant="dark" /> :  Parser(htmlContent)}
              </div>
              <Comments />
            </>
          )}
        </ArticleStyled>
  );
}
