const InputBar = ({ handleChange }) => {
    return <div className="input-bar">
        <label className="choose-label">Choose your food</label>
        <input className="choose-input" onChange={handleChange} />
    </div>
}
export default InputBar