import './style.css'

const index = ({ setDropDown }) => {
    return (
        <div className="dropdown-container">
            <label htmlFor="dropdown">Dropdown</label>
            <select className="dropdown" name="cars" id="cars" onChange={ (e) => setDropDown(e.target.value)}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}

export default index