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
    return <div>
        {console.log(contacts)}
        {contacts.map((contact) => {
            const { name, email, msg, id } = contact
            return (<section key={id} className='item-list'>
                <br />
                <ul>
                    <li><h3>{name}</h3></li>
                    <li><h4>{email}</h4></li>
                    <li><p>{msg}</p></li>
                </ul>
            </section>
            )
        })}
    </div >
}

export default Contacts