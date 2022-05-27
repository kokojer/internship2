import styled, { css } from 'styled-components'
import icon from './commentsIcon.svg'
import { Accordion } from 'react-bootstrap'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector'
import { BigPostItemType } from '../../../redux/typesPost'
import parse from 'html-react-parser'
import AccordionHeader from 'react-bootstrap/AccordionHeader'
const CommentsContainer = styled.div`
  margin-top: 2rem;
`
const CommentsCounter = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-right: 0.5rem;
`
const CommentsInfo = styled.div`
  display: flex;
  font-size: 13px;
  font-style: italic;
`

const NestedCommentContainer = styled.div`
  padding: 1rem;
  outline: 3px solid lightgray;
  box-shadow: 3px 3px 3px black;
  :not(:last-child){
    margin-bottom: 1rem;
  }
`
const AccordionHeaderDisabled = styled.div`
  padding: 1rem;
  background-color: white;
  margin-bottom: 1rem;
`


export const Comments = ({comments, commentsCounter}:{comments:Array<BigPostItemType>, commentsCounter:number}) => {

  const getNestedComments = (commentsNested:BigPostItemType[], arr:Array<BigPostItemType>) => {
    commentsNested.map((commentNested) => {
      arr.push(commentNested)
      if(commentNested.comments.length){
        getNestedComments(commentNested.comments, arr)
      }
    })
  }
  const parseComment = (comm:BigPostItemType) => {
    return parse(comm.content.replace(/>&gt;/g,' style="border-left:3px solid lightgray;padding-left:1rem">'))
  }
  return (
        <CommentsContainer>
          <div className='d-flex mb-3'>
            <h2 className='me-3 mb-0 d-flex align-items-center'>Comments</h2>
            <div className='d-flex align-items-center'>
              <CommentsCounter>{commentsCounter}</CommentsCounter>
              <img src={icon} width='40' height='40'/>
            </div>
          </div>
          <div>
            {commentsCounter ? (
              <Accordion alwaysOpen>
                {comments?.map((comment) => {
                  const arr:Array<BigPostItemType> = []
                  getNestedComments(comment.comments, arr)
                  if(comment.content === '[deleted]' || !comment.content){
                    return
                  }
                  if(!comment.comments.length){
                    return (
                      <AccordionHeaderDisabled key={comment.id}>
                        <div className='mb-2' >
                          {parseComment(comment)}
                        </div>
                        <CommentsInfo>
                          <div className='me-3'> Author: {comment.user}</div>
                          <div> Date: {comment.time_ago}</div>
                        </CommentsInfo>
                      </AccordionHeaderDisabled>
                    )
                  }
                  return (
                    <Accordion.Item eventKey={comment.id.toString()} className='mb-3' key={comment.id}>
                      <Accordion.Header>
                        <div className='me-3'>
                          <div className='mb-2' >
                            {parseComment(comment)}
                          </div>
                          <CommentsInfo>
                            <div className='me-3'> Author: {comment.user}</div>
                            <div> Date: {comment.time_ago}</div>
                          </CommentsInfo>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        {arr.map((item) => {
                          if(item.content === '[deleted]' || !item.content){
                            return
                          }
                          return (
                            <NestedCommentContainer key={item.id}>
                              <div className='mb-2' >
                                {parseComment(item)}
                              </div>
                              <CommentsInfo>
                                <div className='me-3'> Author: {item.user}</div>
                                <div> Date: {item.time_ago}</div>
                              </CommentsInfo>
                            </NestedCommentContainer>
                          )
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                })}
              </Accordion>
            ):(
              <div className='ms-2'>No comments</div>
            )}
          </div>
        </CommentsContainer>
  );
}
