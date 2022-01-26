import './login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const url = 'http://localhost:5000/api/login'

const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const mes = {
            userName: userName,
            password: password
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        })
        const data = await response.json()
        if (data.user) {
            localStorage.setItem('token', data.user)
            window.location.href = '/'
        } else {
            alert(`${data.status}, please try again`)
        }
        setUserName('')
        setPassword('')
    }

    return <div className="login-page">
        <form className="login-box" onSubmit={(e) => handleSubmit(e)}>
            <div className='login-input-box'>
                <div>
                    <label className='login-text'>User Name</label>
                    <input className='login-inptus'
                        placeholder='insert your Username'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        type='string' />
                </div>
                <div>
                    <label className='login-text'>Password</label>
                    <input className='login-inptus'
                        placeholder='insert your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password' />
                </div>
            </div>
            <div className='login-button-box'>
                <button className='login-button'> LogIn</button>
                <Link className='create-new-account-btn' to='/register'>Create a new account</Link>
            </div>
        </form>
    </div>
}
export default Login
