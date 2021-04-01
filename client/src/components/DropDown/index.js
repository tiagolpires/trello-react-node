import './style.css'

const index = ({ dropDown, setDropDown }) => {
    return (
        <div className="dropdown-container">
            <label htmlFor="status">Status</label>
            <select className="dropdown" name="status" value={dropDown} onChange={ (e) => setDropDown(e.target.value)}>
                <option value="true">Completada</option>
                <option value="false">A fazer</option>
            </select>
        </div>
    )
}

export default index