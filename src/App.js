import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//pages
import PageNotFound from './Pages/404/PageNotFound'
import Home from './Pages/Home/Home'
import User from './Components/User/User'
import { initializeUsers } from './State/usersReducer'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    // initialize users
    dispatch(initializeUsers())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/user/:id'>
          <User/>
        </Route>
        <Route  path='/'>
          <Home />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )

}
export default App
