import './style.css'

const index = ({ setDropDown }) => {
    return (
        <div className="dropdown-container">
            <label htmlFor="dropdown">Dropdown</label>
            <select className="dropdown" name="cars" id="cars" onChange={ (e) => setDropDown(e.target.value)}>
                <option value="value-1">Value 1</option>
                <option value="value-2">Value 2</option>
                <option value="value-3">Value 3</option>
                <option value="value-4">Value 4</option>
            </select>
        </div>
    )
}

export default index