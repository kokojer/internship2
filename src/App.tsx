import styled from 'styled-components'
import { Header } from './modules/Header/Header'
import { Main } from './modules/Main/Main'

const Wrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
  `
export const App = () => {


  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}
