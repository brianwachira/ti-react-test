import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import ProfileCard from '../ProfileCard'
import { useParams } from 'react-router-dom'
import './User.scss'
import { getUser, setNotification, updateUser } from '../../State/usersReducer'
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
            const notification = {
                type : 'SUCCESS',
                title: 'SUCCESS',
                message: 'User updated successfully'
            }
            dispatch(setNotification(notification))
        }catch(error){
            alert(error)
        }
    }
    return (
        <>
            <h2 className={'text-primary text-center mt-4 mb-0'}>User Detail</h2>
            <div className="container d-flex justify-content-center">
                <div className="profile-card card">
                    <div className="d-flex flex-column flex-md-row">
                        <div className="flex-shrink-0 mx-auto">
                            <figure className={'d-flex align-items-center'}>
                                <i className="fa fa-user text-center fa-3x text-light" aria-hidden="true"></i>
                            </figure>
                        </div>
                        <div className="flex-grow-1 ms-md-3 ">
                            <div className='d-grid justify-content-center justify-content-lg-start'>
                                <h3><i className="fa fa-user text-primary me-2 d-none d-md-inline-flex" aria-hidden="true"></i>{user.name}</h3>
                                <p className={'me-4'}><i className="fa fa-id-card text-primary me-2 d-none d-md-inline-flex" aria-hidden="true"></i>{user.bio}</p>
                                <p><i className="fa fa-envelope text-primary me-2 d-none d-md-inline-flex" aria-hidden="true"></i>{user.email}</p>
                                <p><i className="fa fa-handshake-o text-primary me-2 d-none d-md-inline-flex" aria-hidden="true"></i>{user.occupation}</p>
                            </div>
                            <RegisterModal
                                label={'Edit User Details'}
                                name={name}
                                bio={bio}
                                email={email}
                                occupation={occupation}
                                setName={setName}
                                setBio={setBio}
                                setEmail={setEmail}
                                setOccupation={setOccupation}
                                handleSubmit={dispatchUpdate}/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default User