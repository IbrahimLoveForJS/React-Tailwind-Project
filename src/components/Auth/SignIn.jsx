import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { HiEye, HiEyeOff } from "react-icons/hi"

function SignIn() {
  var navigate = useNavigate()
  var defaultUser = { email: 'test@grocify.com', password: 'password123' }

  var [error, setError] = useState('')
  var [showPassword, setShowPassword] = useState(false)
  var [email, setEmail] = useState('')       // <- controlled email
  var [password, setPassword] = useState('') // <- controlled password

  function handleSignIn(e) {
    e.preventDefault()
    var users = JSON.parse(localStorage.getItem('grocifyUsers') || '[]')

    if ((email === defaultUser.email && password === defaultUser.password) ||
        users.some(function(u) { return u.email === email && u.password === password })) {
      localStorage.setItem('grocifyAuth', 'true')
      navigate('/')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 via-orange-100 to-yellow-50">
      <form 
        onSubmit={handleSignIn} 
        className="bg-white shadow-2xl rounded-3xl p-16 w-[28rem] md:w-[36rem] flex flex-col gap-8 transform transition-all duration-500 hover:scale-105"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 text-center">Welcome Back</h2>
        <p className="text-center text-gray-500 text-lg md:text-xl">Sign in to continue to Grocify</p>

        {error && (
          <div className="text-red-500 text-center font-medium bg-red-100 p-3 rounded text-lg">
            {error}
          </div>
        )}

        {/* Controlled Email */}
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"  // browser won’t autofill
          className="p-4 text-xl md:text-xl placeholder:text-xl md:placeholder:text-xl border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
        />

        {/* Controlled Password */}
        <div className="relative">
          <input 
            name="password" 
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"  // prevents autofill
            className="w-full p-4 text-xl md:text-xl placeholder:text-xl md:placeholder:text-xl border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition pr-12"
          />
          <button 
            type="button"
            onClick={function(){ setShowPassword(!showPassword) }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-500 text-2xl"
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>

        <button 
          type="submit" 
          className="bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-4 text-xl md:text-xl rounded-2xl shadow-lg hover:from-orange-500 hover:to-orange-600 transform hover:scale-105 transition"
        >
          Sign In
        </button>

        <p className="text-center text-gray-500 text-lg md:text-xl">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-500 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default SignIn
