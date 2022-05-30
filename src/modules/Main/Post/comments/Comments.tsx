import styled from 'styled-components'
import icon from './commentsIcon.svg'
import { Accordion } from 'react-bootstrap'
import { BigPostItemType } from '../../../../redux/typesPost'
import { NotNestedComment } from './NotNestedComment'
import { NestedComment } from './NestedComment'
const CommentsContainer = styled.div`
    margin-top: 2rem;
`
const CommentsCounter = styled.div`
    font-size: 30px;
    font-weight: 500;
    margin-right: 0.5rem;
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
            <div className='d-flex mb-3'>
                <h2 className='me-3 mb-0 d-flex align-items-center'>Comments</h2>
                <div className='d-flex align-items-center'>
                    <CommentsCounter>{commentsCounter}</CommentsCounter>
                    <img src={icon} width='40' height='40' />
                </div>
            </div>
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
                    <div className='ms-2'>No comments</div>
                )}
            </div>
        </CommentsContainer>
    )
}
