import styled from 'styled-components'
import { Header } from './modules/Header/Header'
import { Main } from './modules/Main/Main'
import axios from 'axios'

const Wrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
  `
export const App = () => {
  const x = axios.get('https://api.hnpwa.com/v0/item/13831370.json').then(res => console.log(res))

  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}
