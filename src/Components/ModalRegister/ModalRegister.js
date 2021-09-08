import React, { useRef } from 'react'
const RegisterModal = (props) => {
    const closeModal = useRef(null)
    const { label,  user, handleSubmit } = props
    //setName, setBio, setOccupation,
    const bypassSubmit = (event) => {
        event.preventDefault()
        handleSubmit()

        setTimeout(() => {

            //Simulate a click
            closeModal.current.click()

        }, 1000)
    }
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                {label}
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{label}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <p>{user.name}</p>
                        <form onSubmit={(event) => bypassSubmit(event)}>
                            <div className="modal-body">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name=""
                                    id=""
                                    value={user.name}
                                    //onChange={(event) => setName(event.target.value)}
                                    placeholder='John Doe'
                                    required />
                                <label htmlFor="bio" className="form-label">Bio</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name=""
                                    id=""
                                    value={user.bio}
                                    //onChange={(event) => setBio(event.target.value)}
                                    placeholder="+256712345678"
                                    required />
                                <label htmlFor="occupation" className="form-label">Occupation</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name=""
                                    id=""
                                    value={user.occupation}
                                    //onChange={(event) => setOccupation(event.target.value)}
                                    placeholder=" "
                                    required />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeModal}>Cancel</button>
                                    <button type="submit" className="btn btn-primary">{label}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RegisterModal