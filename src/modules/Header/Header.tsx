import styled from 'styled-components'
import { Container, Spinner } from 'react-bootstrap'
import { Routes, Route, NavLink } from 'react-router-dom'
import { Mainheader } from './MainHeader'
import { Postheader } from './PostHeader'
const HeaderStyled = styled.header`
    background: #EA7306;
    border-bottom: 1px solid #000000;
    padding: 8px 0;
  `


export const Header = () => {


  return (
    <HeaderStyled>
      <Container>
          <Routes>
            <Route path='/*' element={<Mainheader />} />
            <Route path='/posts/:id' element={<Postheader />}/>
          </Routes>
      </Container>
    </HeaderStyled>
  );
}
