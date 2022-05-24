import { Container } from 'react-bootstrap'
import { Posts } from './Posts/Posts'
import { LoadMore } from './Loadmore/LoadMore'
import { Routes, Route} from 'react-router-dom'

export const Main = () => {

  return (
        <Container>
          <main className='d-flex flex-column'>
            <Routes>
              <Route path='/*' element={<><Posts /><LoadMore /></>}/>
              <Route path='/posts/:id' element={<>wgwegwweggg</>}/>
            </Routes>
          </main>
        </Container>
  );
}
