import './profile.css'
import { data } from './data'

const Profile = () => {

    const { portraitImage, profileImage, name, skills, email, phone, birthday, about } = data

    return <>
        <div className="profile-page">
            <section className='profile-section'>
                <div className='portrait-box'>
                    <img src={portraitImage} className='portrait-picture' />
                </div>
                <div className='profile-pic-section'>
                    <div className='profile-pic-box'>
                        <img className='profile-pic' src={profileImage} />
                    </div>
                </div>
                <div className='profile-text'>
                    <div className='text-zone-1'>
                        <div className='user-data-box'>
                            <h4 className='name'>{name}</h4>
                            <div className='undername'>
                                <div className='skills-box'>
                                    <label className='skills-title'>Skills</label>
                                    <ul>
                                        {skills.map(skill => {
                                            return <>
                                                <li>{skill}</li>
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
                                        <h5 className='content-profile'>{birthday}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-zone-2'>
                        <div>
                            <h1 className='text-profile'>About Me</h1>
                            <p className='personal-description'>{about}</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </>
}

export default Profile