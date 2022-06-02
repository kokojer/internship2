import { Container } from 'react-bootstrap'
import { Posts } from './Posts/Posts'
import { LoadMore } from './LoadMore/LoadMore'
import { Routes, Route } from 'react-router-dom'
import { Post } from './Post/Post'

export const Main = () => {
    return (
        <Container className='px-0 px-md-3'>
            <main className='d-flex flex-column'>
                <Routes>
                    <Route
                        path='/*'
                        element={
                            <>
                                <Posts />
                                <LoadMore />
                            </>
                        }
                    />
                    <Route path='/posts/:id' element={<Post />} />
                </Routes>
            </main>
        </Container>
    )
}
