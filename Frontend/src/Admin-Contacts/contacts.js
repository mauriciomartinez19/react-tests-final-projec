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
    return <div className='item'>
        {console.log(contacts)}
        {contacts.map((contact) => {
            const { name, email, message, _id } = contact
            return (<section key={_id} className='item-list'>
                <div className='title'>
                    <div>
                        <h3 className='name'>{name}</h3>
                        <h4 className='email'>{email}</h4>
                    </div>
                    <img src={quotation} alt='quotation-marks' />
                </div>
                <p className='mes'>{message}</p>
            </section>
            )
        })}
    </div >
}

export default Contacts