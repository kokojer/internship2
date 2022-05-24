import styled from 'styled-components'
import { Container, Spinner } from 'react-bootstrap'
import { Routes, Route, NavLink } from 'react-router-dom'
import { reloadPosts } from '../../redux/getInfo/reloadPosts'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { useEffect } from 'react'
const HeaderStyled = styled.header`
    background: #EA7306;
    border-bottom: 1px solid #000000;
    padding: 8px 0;
  `
const Button = styled.span`
    color:white;
    font-weight: bold;
    text-decoration: none;
  `

const ReloadButton = styled.span`
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color:white;
  `

export const Header = () => {
  const {pageToLoad,loading, error} = useTypedSelector(state => state.posts)
  const dispatch = useDispatch()
  const bindReloadPosts = bindActionCreators(reloadPosts, dispatch)
  useEffect(() => {
   const timer = setInterval(() => {
         bindReloadPosts(pageToLoad)
       },60000)
    return () => clearInterval(timer)
   },[pageToLoad])

  return (
    <HeaderStyled>
      <Container>
          <Routes>
            <Route path='/*' element={
            <div className='d-flex justify-content-between'>
              <div className='text-white fw-bold'>Hacker News</div>
              <div className='d-flex align-items-center'>
                {loading ? <Spinner animation="border" size="sm" /> : ''}
                {error ? '' : (
                  <ReloadButton className='ms-2' onClick={(e) => {
                    const reloadButton = e.currentTarget
                    reloadButton.style.pointerEvents = 'none'
                    reloadButton.style.color = 'black'
                    reloadButton.parentElement ? reloadButton.parentElement.style.cursor = 'not-allowed': ''
                    setTimeout(() => {
                      reloadButton.style.pointerEvents = 'auto'
                      reloadButton.style.color = 'white'
                      reloadButton.parentElement ? reloadButton.parentElement.style.cursor = 'pointer': ''
                    }, 5000)
                    return bindReloadPosts(pageToLoad)}
                  }>Reload News</ReloadButton>
                )}
              </div>
            </div>} />
            <Route path='/posts/:id' element={
              <NavLink to='/' className='text-decoration-none'>
                <Button>Back to News</Button>
              </NavLink>
            }/>
          </Routes>
      </Container>
    </HeaderStyled>
  );
}
