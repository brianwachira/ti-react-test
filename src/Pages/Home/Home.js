/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {


    const { users } = useSelector(state => state)
    console.log(useSelector(state => state))
    return (
        <>
            <section>
                <main className="container">
                    <h2 className={'text-primary text-center mt-4 mb-0'}>Users</h2>
                    <div className="row">
                        {users.map(user =>
                            <div
                                className="col-md-6 col-lg-4 mb-2"
                                key={user.id}>
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
                            </div>
                        )}
                    </div>
                </main>
            </section>
        </>
    )
}

export default Home