import './style.css'

const index = ({ checkBox, setCheckBox }) => {
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
                    <div className="checkbox" id="option-1" onClick={(e) => handleCheckBoxClick(e.target)}></div>
                    <label htmlFor="option-1">Opção 1</label>
                </div>
                <div className="checkbox-container">
                    <div className="checkbox" id="option-2" onClick={(e) => handleCheckBoxClick(e.target)}></div>
                    <label htmlFor="option-2">Opção 2</label>
                </div>
                <div className="checkbox-container">
                    <div className="checkbox" id="option-3" onClick={(e) => handleCheckBoxClick(e.target)}></div>
                    <label htmlFor="option-3">Opção 3</label>
                </div>
            </div>
        </div>
    )
}

export default index