import { useState } from "react"
import './update.css'
import jwt_decode from 'jwt-decode'

const url = 'http://localhost:5000/api/login/register'

const Update = ({ showUpdate, oldUserName, oldBirth, oldEmail, oldPhone, oldAboutMe, oldSkills, oldProfImage, oldPortImage }) => {
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [birth, setBirth] = useState()
    const [aboutMe, setAboutMe] = useState()
    const [skills, setSkills] = useState(['', '', ''])
    const [profImage, setProfImage] = useState('')
    const [portImage, setPortImage] = useState('')

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        return base64
    };

    const handleSubmit = async (e) => {
        const token = localStorage.getItem('token')
        let decoded = jwt_decode(token)
        const id = decoded.id

        const mes = {
            id: id,
            userName: userName || oldUserName,
            phone: phone || oldPhone,
            email: email || oldEmail,
            birth: birth || oldBirth,
            aboutMe: aboutMe || oldAboutMe,
            skills: [skills[0] || oldSkills[0], skills[1] || oldSkills[1], skills[2] || oldSkills[2]],
            profImage: profImage || oldProfImage,
            portImage: portImage || oldPortImage
        }
        console.log(mes)
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        })
        const data = await response.json()
        alert('profile Updated')
        showUpdate()
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
                            defaultValue={oldUserName}
                            onChange={(e) => setUserName(e.target.value)}
                            type='string' />
                    </div>
                    <div>
                        <label className='login-text'>Email</label>
                        <input className='login-inptus'
                            placeholder='insert your Email'
                            defaultValue={oldEmail}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email' />
                    </div>
                    <div>
                        <label className='login-text'>Birthday</label>
                        <input className='login-inptus'
                            placeholder='insert your Birthday'
                            defaultValue={oldBirth}
                            onChange={(e) => setBirth(e.target.value)}
                            type='date' />
                    </div>
                    <div>
                        <label className='login-text'>Phone</label>
                        <input className='login-inptus'
                            placeholder='insert your Phone number'
                            defaultValue={oldPhone}
                            onChange={(e) => setPhone(e.target.value)}
                            type='number' />
                    </div>
                    <div>
                        <label className='login-text'>Skill 1</label>
                        <input className='login-inptus'
                            placeholder='insert your Skill'
                            defaultValue={oldSkills[0]}
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
                            defaultValue={oldSkills[1]}
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
                            defaultValue={oldSkills[2]}
                            onChange={(e) => setSkills(prev => {
                                const newState = [...prev]
                                newState[2] = e.target.value
                                return newState
                            })
                            }
                            type='String' />
                    </div>
                    <div>
                        <label className='login-text'>Profile image</label>
                        <input
                            type="file"
                            label="Image"
                            name="myFile"
                            accept=".jpeg, .png, .jpg"
                            onChange={async (e) => setProfImage(await handleFileUpload(e))}
                        />
                    </div>
                    <div>
                        <label className='login-text'>Portrait image</label>
                        <input
                            type="file"
                            label="Image"
                            name="myFile"
                            accept=".jpeg, .png, .jpg"
                            onChange={async (e) => setPortImage(await handleFileUpload(e))}
                        />
                    </div>
                    <div>
                        <label className='login-text'>About Me</label>
                        <textarea className='login-inptus'
                            placeholder='insert your description'
                            defaultValue={oldAboutMe}
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