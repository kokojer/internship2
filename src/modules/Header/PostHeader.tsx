import styled from 'styled-components'
import { NavLink, useParams } from 'react-router-dom'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useActions } from '../../redux/hooks/useActions'

const Button = styled.span`
    color: white;
    font-weight: bold;
    text-decoration: none;
`

const ReloadButton = styled.span`
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
`

export const Postheader = () => {
    const { id } = useParams()
    const { loading, error } = useTypedSelector((state) => state.post)
    const { getPostInfo } = useActions()
    useEffect(() => {
        const timer = setInterval(() => {
            id ? getPostInfo(+id, true) : ''
        }, 60000)
        return () => clearInterval(timer)
    }, [])
    return (
        <div className='d-flex justify-content-between'>
            <NavLink to={`/id_${id}`} className='text-decoration-none'>
                <Button>Back to News</Button>
            </NavLink>
            <div className='d-flex align-items-center'>
                {loading ? <Spinner animation='border' size='sm' /> : ''}
                {error ? undefined : (
                    <ReloadButton
                        className='ms-2'
                        onClick={(e) => {
                            const reloadButton = e.currentTarget
                            reloadButton.style.pointerEvents = 'none'
                            reloadButton.style.color = 'black'
                            reloadButton.parentElement
                                ? (reloadButton.parentElement.style.cursor = 'not-allowed')
                                : ''
                            setTimeout(() => {
                                reloadButton.style.pointerEvents = 'auto'
                                reloadButton.style.color = 'white'
                                reloadButton.parentElement
                                    ? (reloadButton.parentElement.style.cursor = 'pointer')
                                    : ''
                            }, 5000)
                            if (id) {
                                return getPostInfo(+id, false)
                            }
                        }}
                    >
                        Reload Comments
                    </ReloadButton>
                )}
            </div>
        </div>
    )
}
