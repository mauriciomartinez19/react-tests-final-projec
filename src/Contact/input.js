

const Input = () => {
    return <section className="input-section">
        <h1 className="input-title">Get in Touch!</h1>
        <form className="formulario">
            <input placeholder="name" />
            <input placeholder="email" />
            <textarea placeholder="message" />
            <button type="submit" className="submit-btn">Send</button>
        </form>
    </section>
}

export default Input