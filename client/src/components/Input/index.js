import './style.css'

const index = ({ name, labelValue, placeholder, inputValue, setValue, showError }) => {
    return (
        <div className="input-container">
            <label htmlFor={name}>{labelValue}</label>
            <input type="text" name={name} placeholder={placeholder} value={inputValue} onChange={ (e) => setValue(e.target.value)}/>
            <span className="input-error-message">{showError}</span>
        </div>
    )
}

export default index