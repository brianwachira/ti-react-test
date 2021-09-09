import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard =({ user }) => {

    return (
        <>
        <div className="profile-card card">
            <div className="d-flex flex-column flex-md-row">
                <div className="flex-shrink-0 mx-auto">
                    <figure className={'d-flex align-items-center'}>
                        <i className="fa fa-user text-center fa-3x text-light" aria-hidden="true"></i>
                    </figure>
                </div>
                <div className="flex-grow-1 ms-md-3 mx-auto">
                    <h3><i className="fa fa-user text-primary me-2 d-none d-md-inline-flex" aria-hidden="true"></i>{user.name}</h3>
                    <div className="d-flex justify-content-center justify-content-md-start">
                        <Link to={`user/${user.id}`}>See More</Link>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default ProfileCard