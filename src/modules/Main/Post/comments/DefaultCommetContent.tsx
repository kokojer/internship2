import { parseComment } from './parseComment'
import styled from 'styled-components'
import { BigPostItemType } from '../../../../redux/typesPost'

const CommentsInfo = styled.div`
    display: flex;
    font-size: 13px;
    font-style: italic;
`

const CommentContent = styled.div`
    @media (max-width: 1050px) {
        word-break: break-word;
        font-size: 0.75rem;
        p {
            margin-bottom: 0.5rem;
        }
    }
`

const InfoCommentItem = styled.div`
    @media (max-width: 1050px) {
        font-size: 0.75rem;
    }
    @media (max-width: 400px) {
        text-wrap: none;
    }
`
export const DefaultCommentContent = (props: { comment: BigPostItemType }) => {
    return (
        <>
            {props.comment.deleted ? (
                <CommentContent className='me-3 text-danger fw-bold'>
                    The comment has been deleted
                </CommentContent>
            ) : props.comment.content ? (
                <CommentContent className='mb-2'>{parseComment(props.comment)}</CommentContent>
            ) : (
                <CommentContent className='me-3 text-primary fw-bold'>
                    The comment is empty
                </CommentContent>
            )}
            <CommentsInfo>
                {props.comment.user ? (
                    <InfoCommentItem className='me-2 me-sm-3'>
                        Author: {props.comment.user}
                    </InfoCommentItem>
                ) : undefined}
                <InfoCommentItem> Date: {props.comment.time_ago}</InfoCommentItem>
            </CommentsInfo>
        </>
    )
}
