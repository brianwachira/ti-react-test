/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {


    const { users } = useSelector(state => state)

    return (
        <>
            <section>
                <main className="container">
                    <p>Home</p>
                    <div className="row">
                        {users.map(user =>
                            <div
                                className="col-md-3 mb-3"
                                key={user.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            {user.name}
                                        </h3>
                                        <p className={'card-text'}>BIO :{user.bio}</p>
                                        <p className={'card-text'}>Email :{user.email}</p>
                                        <p className={'card-text'}>Occupation :{user.occupation}</p>
                                        <Link to={`user/${user.id}`}>See More</Link>
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