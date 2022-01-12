import { useEffect, useState } from 'react'
import './admin-contacts.css'

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
    return <div className='item'>
        {console.log(contacts)}
        {contacts.map((contact) => {
            const { name, email, message, id } = contact
            return (<section key={id} className='item-list'>
                <h3 className='name'>{name}</h3>
                <h4 className='email'>{email}</h4>
                <p className='mes'>{'About the company: ' + message}</p>
            </section>
            )
        })}
    </div >
}

export default Contacts