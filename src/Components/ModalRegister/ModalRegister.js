import React, { useRef } from 'react'
const RegisterModal = (props) => {
    const closeModal = useRef(null)
    const { label,  setName, setBio, setEmail, setOccupation,name, bio, email, occupation, handleSubmit } = props

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
                        <p>{name}</p>
                        <form onSubmit={(event) => bypassSubmit(event)}>
                            <div className="modal-body">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name=""
                                    id=""
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    placeholder='John Doe'
                                    required />
                                <label htmlFor="bio" className="form-label">Bio</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name=""
                                    id=""
                                    value={bio}
                                    onChange={(event) => setBio(event.target.value)}
                                    placeholder="I do this and that"
                                    required />
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    name=""
                                    id=""
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="abc@example.com"
                                    required />
                                <label htmlFor="occupation" className="form-label">Occupation</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name=""
                                    id=""
                                    value={occupation}
                                    onChange={(event) => setOccupation(event.target.value)}
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