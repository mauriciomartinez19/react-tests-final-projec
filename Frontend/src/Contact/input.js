import { useState } from "react"

const Input = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const mes = { id: new Date().getTime().toString(), name, email, message }
        setName('')
        setEmail('')
        setMessage('')
        console.log(mes)
        const reqSettings = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        }
        const response = await fetch('http://localhost:5000/api/admin-contact', reqSettings)
        const data = await response.json()
        console.log(data)
    }
    return <section className="input-section">
        <h1 className="input-title">Did you work with me?</h1>
        <h1 className="input-subtitle">Give your review!</h1>
        <form className="formulario" onSubmit={handleSubmit}>
            <input
                type='text'
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                required />
            <input
                type='email'
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required />
            <textarea
                className="message-input"
                value={message}
                placeholder="message"
                onChange={(e) => setMessage(e.target.value)}
                required />
            <button type="submit" className="submit-btn">Send</button>
        </form>
    </section>
}

export default Input