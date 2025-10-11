import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { HiEye, HiEyeOff } from "react-icons/hi"

function Register() {
  var navigate = useNavigate()

  // Controlled inputs
  var [email, setEmail] = useState('')
  var [password, setPassword] = useState('')
  var [showPassword, setShowPassword] = useState(false) // toggle state

  function handleRegister(e) {
    e.preventDefault()
    var users = JSON.parse(localStorage.getItem('grocifyUsers') || '[]')

    if (users.some(function(u){ return u.email === email })) {
      alert('Email already exists')
      return
    }

    users.push({ email: email, password: password })
    localStorage.setItem('grocifyUsers', JSON.stringify(users))
    alert('Account created (fake)')
    navigate('/signin')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 via-orange-100 to-yellow-50">
      <form 
        onSubmit={handleRegister} 
        className="bg-white shadow-2xl rounded-3xl p-16 w-[28rem] md:w-[36rem] flex flex-col gap-8 transform transition-all duration-500 hover:scale-105"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 text-center">Create Account</h2>
        <p className="text-center text-gray-500 text-lg md:text-xl">Sign up to start using Grocify</p>

        {/* Email input */}
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="new-email"
          className="p-4 text-xl md:text-xl placeholder:text-xl md:placeholder:text-xl border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
        />

        {/* Password input with toggle */}
        <div className="relative">
          <input 
            name="password" 
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            className="w-full p-4 text-xl md:text-xl placeholder:text-xl md:placeholder:text-xl border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition pr-12"
          />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500 text-2xl"
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>

        {/* Submit button */}
        <button 
          type="submit"
          className="bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-4 text-xl md:text-xl rounded-2xl shadow-lg hover:from-orange-500 hover:to-orange-600 transform hover:scale-105 transition"
        >
          Create Account
        </button>

        {/* Link to SignIn */}
        <p className="text-center text-gray-500 text-lg md:text-xl">
          Already have an account?{" "}
          <Link to="/signin" className="text-orange-500 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register
