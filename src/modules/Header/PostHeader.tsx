import styled from 'styled-components'
import { NavLink, useParams } from 'react-router-dom'

const Button = styled.span`
    color:white;
    font-weight: bold;
    text-decoration: none;
  `

const ReloadButton = styled.span`
    color:white;
    text-decoration: none;
    font-size: 14px;
  `


export const Postheader = () => {
  const {id} = useParams()

  return (
    <div className='d-flex justify-content-between'>
      <NavLink to='/' className='text-decoration-none'>
        <Button>Back to News</Button>
      </NavLink>
      <ReloadButton>Reload Comments</ReloadButton>
    </div>
  );
}
