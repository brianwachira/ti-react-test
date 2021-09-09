import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import ProfileCard from '../ProfileCard'
import { useParams } from 'react-router-dom'
import './User.scss'
import { getUser, updateUser } from '../../State/usersReducer'
import RegisterModal from '../ModalRegister/ModalRegister'
import { useState } from 'react'

const User = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { user }= useSelector(state => state)
    const [name, setName] = useState('user.name')
    const [bio, setBio] = useState('user.bio')
    const [email, setEmail] = useState('user.email')
    const [occupation, setOccupation] = useState('user.occupation')

    const fetchUser = () => dispatch(getUser(id))
    useEffect(() => {
        // if the user hasnt been fetched yet, fetch them
        if(id !== user.id){
            //save user details on state
            fetchUser()
            setName(user.name)
            setBio(user.bio)
            setEmail(user.email)
            setOccupation(user.occupation)
        }
    },[user.id])

    if(!user) {
        return <h2>loading...</h2>
    }

    // function to update user details
    const dispatchUpdate = () => {
        try {
            const updatedUser = {
                name,
                bio,
                email,
                occupation
            }
            dispatch(updateUser(updatedUser,user.id))
        }catch(error){
            alert(error)
        }
    }
    return (
        <>
            <h1>{user && user.name}</h1>
            <p>{user.bio}</p>
            <RegisterModal
            label={'edit details'}
            name={name}
            bio={bio}
            email={email}
            occupation={occupation}
            setName={setName}
            setBio={setBio}
            setEmail={setEmail}
            setOccupation={setOccupation}
            handleSubmit={dispatchUpdate}/>
        </>
    )
}
export default User