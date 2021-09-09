import React, { useRef } from 'react'
import './ModalRegister.scss'
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
            <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                {label}
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-custom">
                        <div className="modal-header">
                            <h5 className="modal-title text-primary" id="exampleModalLabel">{label}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={(event) => bypassSubmit(event)}>
                            <div className="modal-body">
                                <label htmlFor="name" className="form-label text-primary">Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name=""
                                    id=""
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    placeholder='John Doe'
                                    required />
                                <label htmlFor="bio" className="form-label text-primary">Bio</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name=""
                                    id=""
                                    value={bio}
                                    onChange={(event) => setBio(event.target.value)}
                                    placeholder="I do this and that"
                                    required />
                                <label htmlFor="email" className="form-label text-primary">Email</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    name=""
                                    id=""
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="abc@example.com"
                                    required />
                                <label htmlFor="occupation" className="form-label text-primary">Occupation</label>
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
                                    <button type="button" className="btn btn-secondary btn-cancel" data-bs-dismiss="modal" ref={closeModal}>Cancel</button>
                                    <button type="submit" className="btn btn-primary">Save</button>
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