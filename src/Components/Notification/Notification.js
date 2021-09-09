import React from 'react'
import { useSelector } from 'react-redux'
const Notification = ({ title, message }) => {

    const { notification } = useSelector(state => state)
    if(!title || !message) {
        return null
    }
    return (
        <>
            <div className="position-fixed top-0 end-0 p-3">
                <div className={'toast fade show bg-secondary text-primary'} role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src="..." className="rounded me-2" alt="..." />
                        <strong className="me-auto">{notification.title}dfsdfsdf</strong>
                        <small className="text-muted">just now</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        <p className="text-danger">{notification.message}sdfsdfsd</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notification