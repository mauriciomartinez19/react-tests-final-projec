import { useEffect, useState } from 'react'
import './admin-contacts.css'
import quotation from './images/quotations-marks.png'

const Contacts = () => {

    const [contacts, setContacts] = useState([])

    const getContacts = async () => {
        const response = await fetch('http://localhost:5000/api/admin-contact')
        const data = await response.json()
        setContacts(data)
    }

    useEffect(() => {
        getContacts()
    }, [])
    return <div className='item-admin-contact'>
        {console.log(contacts)}
        {contacts.map((contact) => {
            const { name, email, message, _id } = contact
            return (<section key={_id} className='item-list-admin-contact'>
                <div className='title-admin-contact'>
                    <div>
                        <h3 className='name-admin-contact'>{name}</h3>
                        <h4 className='email-admin-contact'>{email}</h4>
                    </div>
                    <img src={quotation} alt='quotation-marks' className='img-admin-contact' />
                </div>
                <p className='mes-admin-contact'>{message}</p>
            </section>
            )
        })}
    </div >
}

export default Contacts