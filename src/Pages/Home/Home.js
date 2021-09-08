/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import RegisterModal from '../../Components/ModalRegister/ModalRegister'
import { updateUser } from '../../State/usersReducer'

const Home = () => {

    const dispatch = useDispatch()
    //get users from state
    const users = useSelector(state => state)

    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [occupation, setOccupation] = useState('')

    const handleSubmit = (id) => {
        try {
            const updatedUser = {
                name,
                bio,
                occupation
            }
            dispatch(updateUser(updatedUser, id))
        } catch (error) {
            alert(error)
        }
    }
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
                                        <Link to={`user?id=${user.id}`}>See More</Link>
                                        <RegisterModal
                                            label={'Edit'}
                                            setName={setName}
                                            setBio={setBio}
                                            setOccupation={setOccupation}
                                            user={user}
                                            handleSubmit={handleSubmit} />
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