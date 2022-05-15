import { useState } from 'react'
import logo from '../images/logo.svg'
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const login = () => {
    fetch("http://localhost:3001/users/sign_in", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: "test@example.com",
          password: "password",
        },
      }),
    })
      .then((res) => {
        const token = res.headers.get("Authorization")
        if (res.ok && token) {
          localStorage.setItem("token", token);
          return res.json();
        }
        throw new Error(res.toString());
      })
      .then((json) => {
        console.dir('dir', json)
        setIsLoggedIn(true)
      })
      .catch((err) => console.error('err', err));
  }

  const logout = () => {
    const token = localStorage.getItem("token")
    if (!token) {
      console.log('plz login')
      return
    }
    fetch("http://localhost:3001/users/sign_out", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
    .then((res) => {
      if (!res.ok) throw new Error(res.toString())
      console.log(res)
      return res.json();
    })
    .then((json) => {
      console.log("json", json)
      setIsLoggedIn(false)
    })
    .catch((err) => console.error("err", err));
  }

  // const confirmLogin = () => {

  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type='button' onClick={() => login()}>login</button>
        <button type='button' onClick={() => logout()}>logout</button>
      </header>
    </div>
  )
}

export default App
