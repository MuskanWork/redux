import visibleTodoList from "../containers/VisibleTodoList"

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type){
        case 'SET_VISIBILTITY_FILTER':
            return action.visibilityFilter
        default:
            return state    
    }
}
export default visiblilityFilter;