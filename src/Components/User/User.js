import React from 'react'
import { useSelector } from 'react-redux'
import ProfileCard from '../ProfileCard'
//import { useParams } from 'react-router'
import './User.scss'

const User = () => {

    //const { slug } = useParams()
    const id = new URLSearchParams(window.location.search).get('id')
    //const idd = id.get('id')
    const users = useSelector(state => state)
    const user = users.find(user => user.id === id)


    return (
        <>
            <p>{user && user.name}hello there</p>
            <ProfileCard id={id}/>
        </>
    )
}
export default User