import { useState } from "react"
import './update.css'
import jwt_decode from 'jwt-decode'

const url = 'http://localhost:5000/api/login/register'

const Update = ({ showUpdate }) => {
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [birth, setBirth] = useState()
    const [aboutMe, setAboutMe] = useState()
    const [skills, setSkills] = useState(['', '', ''])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        let decoded = jwt_decode(token)
        const id = decoded.id

        const mes = {
            id: id,
            userName: userName,
            phone: phone,
            email: email,
            birth: birth,
            aboutMe: aboutMe,
            skills: skills
        }
        console.log(mes)
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        })
        const data = await response.json()
        console.log(data)
    }

    return <div>
        <form className="update-box" onSubmit={(e) => handleSubmit(e)}>
            <div className="close-btn-box">
                <button className="close-btn" onClick={showUpdate}>
                    x
                </button>
            </div>
            <div className="scroll-update-box">
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
                        <label className='login-text'>Birthday</label>
                        <input className='login-inptus'
                            placeholder='insert your Birthday'
                            onChange={(e) => setBirth(e.target.value)}
                            type='date' />
                    </div>
                    <div>
                        <label className='login-text'>Phone</label>
                        <input className='login-inptus'
                            placeholder='insert your Phone number'
                            onChange={(e) => setPhone(e.target.value)}
                            type='number' />
                    </div>
                    <div>
                        <label className='login-text'>Skill 1</label>
                        <input className='login-inptus'
                            placeholder='insert your Skill'
                            onChange={(e) => setSkills(prev => {
                                const newState = [...prev]
                                newState[0] = e.target.value
                                return newState
                            })
                            }
                            type='String' />
                    </div>
                    <div>
                        <label className='login-text'>Skill 2</label>
                        <input className='login-inptus'
                            placeholder='insert your Skill'
                            onChange={(e) => setSkills(prev => {
                                const newState = [...prev]
                                newState[1] = e.target.value
                                return newState
                            })
                            }
                            type='String' />
                    </div>
                    <div>
                        <label className='login-text'>Skill 3</label>
                        <input className='login-inptus'
                            placeholder='insert your Skill'
                            onChange={(e) => setSkills(prev => {
                                const newState = [...prev]
                                newState[2] = e.target.value
                                return newState
                            })
                            }
                            type='String' />
                    </div>
                    <div>
                        <label className='login-text'>About Me</label>
                        <textarea className='login-inptus'
                            placeholder='insert your description'
                            onChange={(e) => setAboutMe(e.target.value)}
                            type='string' />
                    </div>
                </div>
                <div className='login-button-box'>
                    <button className='login-button'>Submit</button>
                </div>
            </div>
        </form>
    </div>
}

export default Update