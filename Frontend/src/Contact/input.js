import { useState } from "react"

const Input = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sendMes, setSendMes] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { id: new Date().getTime().toString(), name, email, message }
        setSendMes(data)
        console.log(data)
        setName('')
        setEmail('')
        setMessage('')
    }
    return <section className="input-section">
        <h1 className="input-title">Get in Touch!</h1>
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
                value={message}
                placeholder="message"
                onChange={(e) => setMessage(e.target.value)}
                required />
            <button type="submit" className="submit-btn">Send</button>
        </form>
    </section>
}

export default Input