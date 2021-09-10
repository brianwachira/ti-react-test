/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import SearchBox from '../../Components/SearchBox/SearchBox'
import { filterUsers } from '../../State/usersReducer'

const Home = () => {

    // fetch users and filtered users from state
    const { users, filteredUsers } = useSelector(state => state)

    const dispatch = useDispatch()
    // search value to track search text from searchbox component
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {

        dispatch(filterUsers(searchValue))
    },[searchValue])
    return (
        <>
            <section>
                <main className="container">
                    <h2 className={'text-primary text-center mt-4 mb-0'}>Users</h2>
                    <SearchBox onChange={setSearchValue}/>
                    <div className="row">
                        {filteredUsers.length > 0  && filteredUsers.map(user =>
                            <div
                                className="col-md-6 col-lg-4 mb-2"
                                key={user.id}>
                                    <ProfileCard user={user}/>
                            </div>
                        )}
                        {/* only show full list when theres no filtered values */}
                        {filteredUsers.length <= 0 && users.map(user =>
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