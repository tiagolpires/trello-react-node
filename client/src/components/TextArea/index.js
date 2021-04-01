const index = ({ name, labelValue, placeholder, inputValue, setValue, showError }) => {
    return (
        <div className="input-container">
            <label htmlFor={name}>{labelValue}</label>
            <textarea type="text" cols="30" rows="8" name={name} placeholder={placeholder} value={inputValue} onChange={ (e) => setValue(e.target.value)}></textarea>
            <span className="input-error-message">{showError}</span>
        </div>
    )
}

export default index