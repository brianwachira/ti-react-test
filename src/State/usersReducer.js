import userService from '../Services/users'
const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_USERS':
            return action.data
        case 'SET_USER':
            return action.data
        case 'UPDATE_USER':
            return state.map(user => user.id === action.data.id ? action.data : user)
        default:
            return state
    }
}

//dispatch function to initialize users
export const initializeUsers = () => {
    return async dispatch => {
        const users = await userService.getUsers()

        dispatch({
            type: 'INIT_USERS',
            data: users
        })
    }
}

//dispatch function to get users
export const getUser = id => {
    return async dispatch => {
        const user = await userService.getUser(id)

        dispatch({
            type: 'SET_USER',
            data: user
        })
    }
}

//dispatch function to update user
export const updateUser = (user, id) => {
    return async dispatch => {

        const updatedUser = await userService.updateUser(user, id)

        dispatch({
            type: 'UPDATE_USER',
            data: updatedUser
        })
    }
}

export default usersReducer