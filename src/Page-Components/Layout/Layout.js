import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

// Default Layout Component
const Layout =({ children }) => {

return (
    <>
    <Navbar/>
    {children}
    </>
)
}
export default Layout