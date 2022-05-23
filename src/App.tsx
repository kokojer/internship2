import styled from 'styled-components'
import { Header } from './modules/Header/Header'
import { Posts } from './modules/Main/Posts/Posts'
import { LoadMore } from './modules/Main/LoadMore/LoadMore'

const Wrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
  `
export const App = () => {


  return (
    <Wrapper>
      <Header />
      <Posts />
      <LoadMore />
    </Wrapper>
  );
}
