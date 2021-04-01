import './style.css'

const index = ({ setCheckBox, checkBoxError }) => {
    const handleCheckBoxClick = (box) => {
        if(box.classList.contains('check-selected')) {
            setCheckBox('')
            box.classList.toggle('check-selected')
            return
        }
        const isCheckSelected = document.querySelector('.check-selected')
        if(isCheckSelected) {isCheckSelected.classList.remove('check-selected')} 
        box.classList.toggle('check-selected')
        setCheckBox(box.id)
    }

    return (
        <div className="checkboxes-content">
            <div className="checkboxes-container">
                <div className="checkbox-container">
                    <div className="checkbox" id="top" onClick={(e) => handleCheckBoxClick(e.target)}></div>
                    <label htmlFor="top-position">Adicionar ao topo</label>
                </div>
                <div className="checkbox-container">
                    <div className="checkbox" id="bottom" onClick={(e) => handleCheckBoxClick(e.target)}></div>
                    <label htmlFor="bottom-position">Adicionar por último</label>
                </div>
            </div>
            <span className="input-error-message">{checkBoxError}</span>
        </div>
    )
}

export default index