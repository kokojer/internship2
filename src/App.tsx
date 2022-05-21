import styled from 'styled-components'
import { Header } from './modules/Header/Header'
import { Posts } from './modules/Main/Posts/Posts'

export const App = () => {
  const Wrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
  `
  return (
    <Wrapper>
      <Header />
      <Posts />
    </Wrapper>
  );
}
