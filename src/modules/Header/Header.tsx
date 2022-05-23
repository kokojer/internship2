import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { Routes, Route, NavLink } from 'react-router-dom'
import { reloadPosts } from '../../redux/getInfo/reloadPosts'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../../redux/getInfo/getPosts'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
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
  `
export const Header = () => {
  const {pageToLoad} = useTypedSelector(state => state.posts)
  const dispatch = useDispatch()
  const bindFetchPosts = bindActionCreators(reloadPosts, dispatch)
  return (
    <HeaderStyled>
      <Container>
          <Routes>
            <Route path='/*' element={
            <div className='d-flex justify-content-between'>
              <div className='text-white fw-bold'>Hacker News</div>
              <ReloadButton className='text-white' onClick={() => bindFetchPosts(pageToLoad)}>Reload News</ReloadButton>
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
