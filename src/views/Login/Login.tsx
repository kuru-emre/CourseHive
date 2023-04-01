import { FC, useState, useEffect } from 'react'
import { validator } from '../../utils/validator'
import { StyledLogin } from '.'
import { useParams, Link, useHistory } from 'react-router-dom'
import { ROUTES, useUser } from '../../utils'
import { useAppSelector } from '../../redux'

const Login: FC = () => {
  const history = useHistory()

  const { login } = useUser()
  const { user } = useAppSelector(state => state.user)

  const params = useParams()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '' })

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setErrors(validator.loginValidation(email, password))

    login(email,password);

  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && email !== '' && password !== '') {
      alert('Login Successful')
      setEmail('')
      setPassword('')
    }
  }, [errors])

  // If the user is already logged in,
  // redirect the user to the home page.
  useEffect(() => {
    if (!user) {
      return
    }

    history.push(ROUTES.App.home)
  }, [user])

  return (
    <StyledLogin>
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          {errors.email && <p style={{ color: 'maroon', fontSize: '15px' }}>{errors.email}</p>}

          <label htmlFor="email">Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />
          {errors.password && <p style={{ color: 'maroon', fontSize: '15px' }}>{errors.password}</p>}

          <button type="submit">Log In</button>
        </form>
        <button className="link-btn">Forget Password?</button>
        <Link to="register">
          <button className="link-btn">Don't have an account? Register here.</button>
        </Link>
      </div>
    </StyledLogin>
  )
}

export default Login
