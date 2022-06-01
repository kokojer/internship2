import { BigPostItemType } from '../../../../redux/typesPost'
import styled from 'styled-components'
import { Accordion } from 'react-bootstrap'
import { DefaultCommentContent } from './DefaultCommetContent'

const NestedCommentContainer = styled.div`
    padding: 1rem;
    outline: 3px solid lightgray;
    box-shadow: 3px 3px 3px black;
    overflow-x: auto;
    overflow-y: hidden;
    :not(:last-child) {
        margin-bottom: 1rem;
    }
`

const CommentContainer = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
`

export const NestedComment = (props: { comment: BigPostItemType }) => {
    const getNestedComments = (commentsNested: BigPostItemType[], arr: Array<BigPostItemType>) => {
        commentsNested.map((commentNested) => {
            arr.push(commentNested)
            if (commentNested.comments.length) {
                getNestedComments(commentNested.comments, arr)
            }
        })
    }
    const arrNestedComments: Array<BigPostItemType> = []
    getNestedComments(props.comment.comments, arrNestedComments)
    return (
        <Accordion.Item
            eventKey={props.comment.id.toString()}
            className='mb-3'
            key={props.comment.id}
        >
            <Accordion.Header>
                <CommentContainer className='me-3'>
                    <DefaultCommentContent comment={props.comment} />
                </CommentContainer>
            </Accordion.Header>
            <Accordion.Body className='px-2 px-md-3'>
                {arrNestedComments.map((item) => {
                    return (
                        <NestedCommentContainer key={item.id}>
                            <DefaultCommentContent comment={item} />
                        </NestedCommentContainer>
                    )
                })}
            </Accordion.Body>
        </Accordion.Item>
    )
}
