import React, {useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Properties from './components/Properties'
import Dashboard from './components/dashboard_items/Dashboard'
import Contact from './components/Contact'
import Favorites from './components/Favorites'
import About from './components/About'
import {useDispatch} from 'react-redux'
import {user_loaded} from '../src/store/actions/authAction'
import {get_projects} from '../src/store/actions/projectActions'
import Logout from './components/Logout'
import BtnToTop from './components/BtnToTop'
import ProjectList from './components/dashboard_items/ProjectList'
import Loading from './components/Loading'
import ProjectEdit from './components/dashboard_items/ProjectEdit'
import ProjectDetails from './components/dashboard_items/ProjectDetails'
import Services from './components/Services'


function App() {

  const dispatch = useDispatch()
  const[loading, setLoading] = useState(true)

  useEffect(()=>{
    dispatch(user_loaded())
    dispatch(get_projects())

    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  if(loading){
    return <Loading />
  } 
  
  return (
    <div>
        {/* <Nav /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/properties" component={Properties} />
        <Route path="/contact" component={Contact} />
       
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/fav" component={Favorites} />
        <Route path="/logout" component={Logout} />
        <Route path="/about-us" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/project-list" component={ProjectList} />
        <Route path="/project-edit/:id" component={ProjectEdit} />
        <Route path="/project-details/:id" component={ProjectDetails} />
        {/* <Route path="/property-details/:id" component={PropertyDetails} /> */}
      </Switch>
      {/* <Footer/> */}
      <BtnToTop/>
    </div>
  )
}

export default App
