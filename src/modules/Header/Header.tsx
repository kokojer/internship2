import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { Routes, Route, NavLink } from 'react-router-dom'

export const Header = () => {
  const Header = styled.header`
    background: #EA7306;
    border-bottom: 1px solid #000000;
    padding: 8px 0;
  `
  const Button = styled.span`
    color:white;
    font-weight: bold;
    text-decoration: none;
  `
  return (
    <Header>
      <Container>
          <Routes>
            <Route path='/' element={
            <div className='d-flex justify-content-between'>
              <div className='text-white fw-bold'>Hacker News</div>
              <div className='text-white'>Reload News</div>
            </div>} />
            <Route path='/posts/:id' element={
              <NavLink to='/' className='text-decoration-none'>
                <Button>Back to News</Button>
              </NavLink>
            }/>
          </Routes>
      </Container>
    </Header>
  );
}
