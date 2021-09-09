import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//pages
import PageNotFound from './Pages/404/PageNotFound'
import Home from './Pages/Home/Home'
import User from './Components/User/User'
import { initializeUsers } from './State/usersReducer'
import Notification from './Components/Notification/Notification'
import Layout from './Page-Components/Layout/Layout'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    // initialize users
    dispatch(initializeUsers())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Notification/>
      <Switch>
        <Route path='/user/:id'>
          <Layout>
            <User/>
          </Layout>
        </Route>
        <Route  exact path='/'>
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )

}
export default App
