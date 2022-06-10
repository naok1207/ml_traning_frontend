import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Auth from '../pages/Auth'
import SignIn from '../pages/Auth/SignIn'
import SignOut from '../pages/Auth/SignOut'
import SignUp from '../pages/Auth/SignUp'
import NotFound from '../pages/Notfound'
import Top from '../pages/Top'
import Project from '../Project'

const AppRoutes = () => (
  <Routes>
    <Route index element={<Top />} />
    <Route path="auth" element={<Auth />}>
      <Route index element={<Navigate to='signin'/>}/>
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signout" element={<SignOut />} />
    </Route>
    <Route path="project" element={<Project />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRoutes
