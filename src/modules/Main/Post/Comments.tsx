import styled, { css } from 'styled-components'
import icon from './commentsIcon.svg'
import { Accordion } from 'react-bootstrap'
const CommentsContainer = styled.div`
  margin-top: 2rem;
`
const CommentsCounter = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-right: 0.5rem;

`

const AccordionHeaderStyled = styled(Accordion.Header)`
  ${props => props.disabled && css`
    button::after {
      display: none;
    }
  `}
`
export const Comments = () => {

  return (
        <CommentsContainer>
          <div className='d-flex mb-3'>
            <h2 className='me-3 mb-0 d-flex align-items-center'>Comments</h2>
            <div className='d-flex align-items-center'>
              <CommentsCounter>142</CommentsCounter>
              <img src={icon} width='40' height='40'/>
            </div>
          </div>
          <div>
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0" className='mb-3'>
                <AccordionHeaderStyled>
                  <div>
                    <div className='mb-2' >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </div>
                    <div className='d-flex'>
                      <div className='me-3'> Author: Vasiliy Petrovich</div>
                      <div> Date: 3 days ago</div>
                    </div>
                  </div>
                </AccordionHeaderStyled>
                <Accordion.Body>
                  <div className='py-3'>
                    <div className='mb-2'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </div>
                    <div className='d-flex'>
                      <div className='me-3'> Author: Vasiliy Petrovich</div>
                      <div> Date: 3 days ago</div>
                    </div>
                  </div>
                  <div className='py-3'>
                    <div className='mb-2'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </div>
                    <div className='d-flex'>
                      <div className='me-3'> Author: Vasiliy Petrovich</div>
                      <div> Date: 3 days ago</div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </CommentsContainer>
  );
}
