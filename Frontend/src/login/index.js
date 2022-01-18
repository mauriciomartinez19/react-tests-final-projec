import './login.css'
import { useState } from 'react'

const url = ''

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
        const data = response.json()
        console.log(data)
    }

    return <div className="login-page">
        <form className="login-box" onSubmit={(e) => handleSubmit(e)}>
            <div className='login-input-box'>
                <div>
                    <label className='login-text'>User Name</label>
                    <input className='login-inptus'
                        placeholder='insert your Username'
                        onChange={(e) => setUserName(e.target.value)}
                        type='string' />
                </div>
                <div>
                    <label className='login-text'>Password</label>
                    <input className='login-inptus'
                        placeholder='insert your Password'
                        onChange={(e) => setPassword(e.target.value)}
                        type='password' />
                </div>
            </div>
            <div className='login-button-box'>
                <button className='login-button'> LogIn</button>
            </div>
        </form>
    </div>
}
export default Login
