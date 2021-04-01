import './style.css'

const index = () => {
    return (
        <div className="checkboxes-content">
            <div className="checkboxes-container">
                <div className="checkbox-container">
                    <div className="checkbox"></div>
                    <label htmlFor="option-1">Opção 1</label>
                </div>
                <div className="checkbox-container">
                    <div className="checkbox"></div>
                    <label htmlFor="option-2">Opção 2</label>
                </div>
                <div className="checkbox-container">
                    <div className="checkbox"></div>
                    <label htmlFor="option-3">Opção 3</label>
                </div>
            </div>
        </div>
    )
}

export default index