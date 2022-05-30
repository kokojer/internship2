import { parseComment } from './parseComment'
import styled from 'styled-components'
import { BigPostItemType } from '../../../../redux/typesPost'

const CommentsInfo = styled.div`
    display: flex;
    font-size: 13px;
    font-style: italic;
`
export const DefaultCommentContent = (props: { comment: BigPostItemType }) => {
    return (
        <>
            {props.comment.deleted ? (
                <div className='me-3 text-danger fw-bold'>The comment has been deleted</div>
            ) : props.comment.content ? (
                <div className='mb-2'>{parseComment(props.comment)}</div>
            ) : (
                <div className='me-3 text-primary fw-bold'>The comment is empty</div>
            )}
            <CommentsInfo>
                {props.comment.user ? (
                    <div className='me-3'> Author: {props.comment.user}</div>
                ) : undefined}
                <div> Date: {props.comment.time_ago}</div>
            </CommentsInfo>
        </>
    )
}
