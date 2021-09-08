import userService from '../Services/users'
const usersReducer = ( state = [],action) => {
    switch(action.type) {
        case 'INIT_USERS':
            return action.data
        case 'SET_USER':
            return action.data
        default:
            return state;
    }
}

export const initializeUsers =  () => {
    return async dispatch => {
        const users = await userService.getUsers()

        dispatch({
            type: 'INIT_USERS',
            data: users
        })
    }
}

export const getUser = id => {
    return async dispatch => {
        const user = await userService.getUser(id)

        dispatch({
            type: 'SET_USER',
            data: user
        })
    }
}

export default usersReducer;