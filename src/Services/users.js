import axios from 'axios'

// Crud functions for users

    const url = "https://ti-react-test.herokuapp.com/users";
// get users
const getUsers = () => {
    const request = axios.get(url)
    return request.then(response =>  response.data);
}

// get single user
const getUser = async id => {

    const response = await axios.get(`${url}/${id}`)

    return response.data
}

const updateUser =  async (user, id) => {
    const response = await axios.patch(`${url}/${id}`,user)

    return response.data
}
export default{ getUsers, getUser, updateUser}