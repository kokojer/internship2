import styled, { css } from 'styled-components'
import { Spinner } from 'react-bootstrap'
import React from 'react'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector'
import { desiredPostsLength } from '../../../redux/store'
import { useActions } from '../../../redux/hooks/useActions'
interface inActive {
    readonly inActive: boolean
}
const LoadMoreStyled = styled.div<inActive>`
    background: black;
    color: white;
    height: 54px;
    width: 100%;
    box-shadow: 0px 0px 5px 0px black;
    margin-top: 0.75rem;
    display: flex;
    border: 3px solid transparent;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0.75rem;
    ${(props) =>
        props.inActive &&
        css`
            background: darkgray;
            color: black;
            border: 3px solid black;
            font-weight: bold;
            border-radius: 5px;
        `}
`

export const LoadMore = () => {
    const { loading, pageToLoad, error } = useTypedSelector((state) => state.posts)
    const { getMorePosts } = useActions()
    if (loading) {
        return <Spinner animation='border' className='mx-auto' />
    }
    if (error) {
        return <LoadMoreStyled inActive={true}>{error.replace(/^Error: /, '')}</LoadMoreStyled>
    }

    return (
        <>
            {Math.ceil(desiredPostsLength / 30) >= pageToLoad ? (
                <LoadMoreStyled onClick={() => getMorePosts(pageToLoad)} inActive={false}>
                    Load More
                </LoadMoreStyled>
            ) : (
                <LoadMoreStyled inActive={true}>
                    {`Maximum of ${desiredPostsLength} news`}
                </LoadMoreStyled>
            )}
        </>
    )
}
