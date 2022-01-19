import './register.css'
import { useState } from 'react'

const url = 'http://localhost:5000/api/register'

const Register = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const mes = {
            userName: userName,
            email: email,
            age: age,
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
                    <label className='login-text'>Email</label>
                    <input className='login-inptus'
                        placeholder='insert your Email'
                        onChange={(e) => setEmail(e.target.value)}
                        type='email' />
                </div>
                <div>
                    <label className='login-text'>Age</label>
                    <input className='login-inptus'
                        placeholder='insert your Password'
                        onChange={(e) => setAge(e.target.value)}
                        type='number' />
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
export default Register