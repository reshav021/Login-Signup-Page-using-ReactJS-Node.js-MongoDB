import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';

function LoginSignup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginContent, setLoginContent] = useState(true)

  const navigate = useNavigate();

  const handleSubmitForm = async () => {

    if (loginContent) {
      // Handle the login logic and make a request to the backend here
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
          navigate('/home');    // Redirect to Homepage
        } else {
          alert("Login failed")
        }
      } catch (error) {
        console.error("Login error:", error)
        alert("An error occurred during login")
      }
    } else {
      // Handle signup logic and make a request to the backend here
      try {
        const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        })

        if (response.ok) {
          alert("Signup successful")
          setLoginContent(true) // Switch to login after successful signup
        } else {
          const errorData = await response.json() // Parse the error response from the server
          console.error("Signup failed:", errorData.error)
          alert("Signup failed: " + errorData.error)
        }
      } catch (error) {
        console.error("Signup error:", error)
        alert("An error occurred during signup")
      }
    }
  }

  return (
    <div>
      <div className="container">
        <div className={loginContent ? "container-active" : ""} onClick={() => setLoginContent(true)}>
          <h1>Login</h1>
        </div>
        <div className={!loginContent ? "container-active" : ""} onClick={() => setLoginContent(false)}>
          <h1>Signup</h1>
        </div>
      </div>

      <form>
        {!loginContent && (
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} /> )} 
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
          <button type="button" onClick={handleSubmitForm}> {loginContent ? "LOGIN" : "SIGNUP"} </button>
      </form>

      <h5>
        {loginContent ? "Don't have an Account?" : "Already have an account?"}{" "}
        <button id="toggleLoginFormBtn" onClick={() => setLoginContent(!loginContent)}>
          {loginContent ? "Create new account" : "Login"}
        </button>
      </h5>
    </div>
  )
}

export default LoginSignup