import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { useEffect } from 'react'
import { useActions } from '../../redux/hooks/useActions'

const ReloadButton = styled.span`
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
`

export const Mainheader = () => {
    const { pageToLoad, loading, error } = useTypedSelector((state) => state.posts)
    const { getAllPosts } = useActions()
    useEffect(() => {
        const timer = setInterval(() => {
            getAllPosts(pageToLoad)
        }, 60000)
        return () => clearInterval(timer)
    }, [pageToLoad])
    return (
        <div className='d-flex justify-content-between'>
            <div className='text-white fw-bold'>Hacker News</div>
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
                            return getAllPosts(pageToLoad)
                        }}
                    >
                        Reload News
                    </ReloadButton>
                )}
            </div>
        </div>
    )
}
