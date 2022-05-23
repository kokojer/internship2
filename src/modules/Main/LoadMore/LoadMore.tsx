import styled, { createGlobalStyle, css } from 'styled-components';
import { Container, Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../../../redux/getInfo/getPosts'
import React from 'react'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector'
import { desiredPostsLength } from '../../../redux/store'
interface inActive {
  readonly inActive: boolean;
}
const LoadMoreStyled = styled.div<inActive>`
    background: black;
    color:white;
    height: 54px;
    width: 100%;
    box-shadow:0px 0px 5px 0px black;
    margin-top: 0.75rem;
    display: flex;
    border: 3px solid transparent;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0.75rem;
  ${props => props.inActive && css`
    background: darkgray;
    color: black;
    border: 3px solid black;
    font-weight: bold;
    border-radius: 5px;
  `}
  `

export const LoadMore = () => {
    const {loading, pageToLoad, error} = useTypedSelector(state => state.posts)
    const dispatch = useDispatch()
    const bindFetchPosts = bindActionCreators(fetchPosts, dispatch)

  if(loading){
    return (
          <Spinner animation="border" className='mx-auto' />
    )
  }

  if(error){
   return ( <Container>
        <LoadMoreStyled inActive={true}>
          {error.toString().replace(/^Error: /,'')}
        </LoadMoreStyled>
    </Container>)
  }

  return (
    <Container>
      {Math.ceil(desiredPostsLength / 30) >= pageToLoad ? (
        <LoadMoreStyled onClick={() => bindFetchPosts(pageToLoad)} inActive={false}>
          Load More
        </LoadMoreStyled>
      ):(
        <LoadMoreStyled inActive={true}>
          {`Maximum of ${desiredPostsLength} news`}
        </LoadMoreStyled>
      )}
    </Container>
  );
}
