import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { SmallPostItemType } from '../../../redux/typesPosts'
import React, { useEffect, useRef } from 'react'
const NavLinkStyled = styled(NavLink)`
    background-color: #bdb5b5;
    display: flex;
    align-items: center;
    padding: 8px;
    text-decoration: none;
    color: black;
    box-shadow:0px 0px 5px 0px black;
    transition: .3s;
    :hover {
      color: black;
      transform: translateX(10px);
      @media(max-width: 767px){
        transform: none;
      }
      
    }
  `
const NumberNews = styled.div`
    font-size: 1rem;
    margin-right: 0.75rem;
    font-weight: 500;
  `
const PostTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 5px;
  @media(max-width: 520px){
    font-size: 12px;
  }
  `
const PostInfo = styled.div`
    font-size: 11px;
    display: flex;
  @media(max-width: 520px){
    font-size: 10px;
    flex-wrap: wrap;
  }
  `

export const PostItem = (props:SmallPostItemType) => {
  const ref = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const anchorNum = window.location.hash.replace(/^.+news_/,'')
    props.index ? +anchorNum === props.index + 1 ? ref.current?.scrollIntoView() : '' : ''
  }, [])
  return (
        <NavLinkStyled to={`/posts/${props.id}`} id={`news_${props.index}`} ref={ref}>
          <NumberNews>{props.index}</NumberNews>
          <div className=''>
            <PostTitle>
              {props.title}
            </PostTitle>
            <PostInfo>
              <div className='me-2'>Author: {props.user}</div>
              <div className='me-2'>Rating: {props.points} points</div>
              <div className='me-0'>Post date: {props.time_ago}</div>
            </PostInfo>
          </div>
        </NavLinkStyled>
  );
}

