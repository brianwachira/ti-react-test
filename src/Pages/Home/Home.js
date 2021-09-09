/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from 'react-redux'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'

const Home = () => {

    // fetch users from state
    const { users } = useSelector(state => state)
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
                                    <ProfileCard user={user}/>
                            </div>
                        )}
                    </div>
                </main>
            </section>
        </>
    )
}

export default Home