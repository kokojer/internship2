import { BigPostItemType } from '../../../../redux/typesPost'
import parse from 'html-react-parser'

export const parseComment = (comm: BigPostItemType) => {
    return parse(
        comm.content.replace(
            />&gt;/g,
            ' style="border-left:3px solid lightgray;padding-left:1rem">',
        ),
    )
}
