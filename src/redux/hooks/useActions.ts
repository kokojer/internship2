import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '../actionCreators/rootActionCreator'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
