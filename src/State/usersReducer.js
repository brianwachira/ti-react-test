import userService from '../Services/users'
const initialUser = {
    id: null,
    name: '',
    bio: '',
    occupation: ''
}
const initialNotification = {
    type : '',
    title: '',
    message: ''
}
const initialState = {
    user: initialUser,
    users: [],
    notification: initialNotification
}

export const usersReducer = ( state = initialState,action) => {
    switch(action.type) {
        case 'INIT_USERS':
            return {
                ...state,
                users: action.data
            }
        case 'SET_USER':

            return {
                ...state,
                user: action.data
            }
        case 'UPDATE_USER':
            return {
                user: action.data,
                users: state.users.map(user => user.id === action.data.id ? action.data : user )
            }
        case 'SET_NOTIFICATION':
                return {
                    ...state,
                    notification: action.data
                }
        default:
            return state
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

export const updateUser = (user,id) => {
    return async dispatch => {
        const updatedUser = await userService.updateUser(user, id)

        dispatch({
            type: 'UPDATE_USER',
            data: updatedUser
        })
    }
}

export const setNotification = notification => {
    return dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            data: notification
        })
    }
}
export default usersReducer