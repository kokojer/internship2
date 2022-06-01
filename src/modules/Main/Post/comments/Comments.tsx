import styled from 'styled-components'
import icon from './commentsIcon.svg'
import { Accordion } from 'react-bootstrap'
import { BigPostItemType } from '../../../../redux/typesPost'
import { NotNestedComment } from './NotNestedComment'
import { NestedComment } from './NestedComment'
const CommentsContainer = styled.div`
    margin-top: 2rem;
    @media (max-width: 1050px) {
        margin-top: 1rem;
    }
`
const CommentsCounter = styled.div`
    font-size: 30px;
    font-weight: 500;
    margin-right: 0.5rem;
    @media (max-width: 1050px) {
        font-size: 1.5rem;
        margin-right: 0.25rem;
    }
`

const CommentsTitle = styled.h2`
    @media (max-width: 1050px) {
        font-size: 1.5rem;
    }
`

const CommentsHeader = styled.div`
    @media (max-width: 400px) {
        justify-content: center;
    }
`

export const Comments = ({
    comments,
    commentsCounter,
}: {
    comments: Array<BigPostItemType>
    commentsCounter: number
}) => {
    return (
        <CommentsContainer>
            <CommentsHeader className='d-flex mb-3'>
                <CommentsTitle className='me-2_5 me-xl-3 mb-0 d-flex align-items-center'>
                    Comments
                </CommentsTitle>
                <div className='d-flex align-items-center'>
                    <CommentsCounter>{commentsCounter}</CommentsCounter>
                    <img src={icon} width='40' height='40' />
                </div>
            </CommentsHeader>
            <div>
                {commentsCounter ? (
                    <Accordion alwaysOpen>
                        {comments?.map((comment) => {
                            if (!comment.comments.length) {
                                return (
                                    <NotNestedComment
                                        comment={comment}
                                        key={comment.id}
                                    ></NotNestedComment>
                                )
                            }
                            return <NestedComment comment={comment} key={comment.id} />
                        })}
                    </Accordion>
                ) : (
                    <div className='ms-sm-2 ms-0 text-center text-sm-start'>No comments</div>
                )}
            </div>
        </CommentsContainer>
    )
}
