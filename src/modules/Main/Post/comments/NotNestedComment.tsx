import { BigPostItemType } from '../../../../redux/typesPost'
import styled from 'styled-components'
import { DefaultCommentContent } from './DefaultCommetContent'
const AccordionHeaderDisabled = styled.div`
    padding: 1rem;
    background-color: white;
    margin-bottom: 1rem;
`

export const NotNestedComment = (props: { comment: BigPostItemType }) => {
    return (
        <AccordionHeaderDisabled key={props.comment.id}>
            <DefaultCommentContent comment={props.comment} />
        </AccordionHeaderDisabled>
    )
}
