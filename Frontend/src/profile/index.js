import './profile.css'
import { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

import Update from './update'


const Profile = () => {

    const [userData, setUserData] = useState([])
    const [skills, setSkills] = useState([])

    const getUserData = async () => {
        const token = localStorage.getItem('token')
        let decoded = jwt_decode(token)
        const id = decoded.id
        const response = await fetch(`http://localhost:5000/api/login/${id}`)
        const user = await response.json()
        setUserData(user)
        setSkills(user.skills)
    }

    useEffect(() => {
        getUserData()
    }, [])

    const [update, setUpdate] = useState(false)
    const showUpdate = () => {
        setUpdate(!update)
    }

    const { userName, birth, email, phone, aboutMe, profImage, portImage } = userData


    return <>
        <a className='edit-logo-box' onClick={showUpdate}>
            <img src='/images/profile/edit.png' className='edit-logo' />
        </a>
        <div className="profile-page">
            <section className='profile-section'>
                <div className='portrait-box'>
                    <img src={portImage} className='portrait-picture' />
                </div>
                <div className='profile-pic-section'>
                    <div className='profile-pic-box'>
                        <img className='profile-pic' src={profImage} />
                    </div>
                </div>
                <div className='profile-text'>
                    <div className='text-zone-1'>
                        <div className='user-data-box'>
                            <h4 className='profile-name'>{userName}</h4>
                            <div className='undername'>
                                <div className='skills-box'>
                                    <label className='skills-title'>Skills</label>
                                    <ul>
                                        {skills.map((skill, index) => {
                                            return <>
                                                <li key={index}>{skill}</li>
                                            </>
                                        })
                                        }
                                    </ul>
                                </div>
                                <div className='contact-box'>
                                    <div className='label-box'>
                                        <label className='profile-label'>Contact</label>
                                        <h5 className='content-profile'>{email}</h5>
                                    </div>
                                    <div className='label-box'>
                                        <label className='profile-label'>Phone</label>
                                        <h5 className='content-profile'>{phone}</h5>
                                    </div>
                                    <div className='label-box'>
                                        <label className='profile-label'>Birthday</label>
                                        <h5 className='content-profile'>{birth}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-zone-2'>
                        <div>
                            <h1 className='text-profile'>About Me</h1>
                            <p className='personal-description'>{aboutMe}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        {update
            ? <div className="update-background">
                <Update
                    showUpdate={showUpdate}
                    oldUserName={userName}
                    oldBirth={birth}
                    oldEmail={email}
                    oldPhone={phone}
                    oldAboutMe={aboutMe}
                    oldSkills={skills}
                    oldProfImage={profImage} />
            </div>
            : <></>}
    </>
}

export default Profile