import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../pages/Auth'
import SignIn from '../pages/Auth/SignIn'
import SignOut from '../pages/Auth/SignOut'
import SignUp from '../pages/Auth/SignUp'
import Top from '../pages/Top'
import Project from '../Project'

const AppRoutes = () => (
  <Routes>
    <Route index element={<Top />} />
    <Route path="auth" element={<Auth />}>
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signout" element={<SignOut />} />
    </Route>
    <Route path="project" element={<Project />} />
  </Routes>
)

export default AppRoutes
