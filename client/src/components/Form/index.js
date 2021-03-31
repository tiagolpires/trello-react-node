import { useState } from 'react'
import createCard from '../../Api'
import formValidate from '../../FormValidation'
import './style.css'

const Index = () => {
    const [cardName, setCardName] = useState("")
    const [cardNameError, setCardNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [desc, setDesc] = useState("")
    const [descError, setDescError] = useState("")
    const [sucessfulMessage, setSucessfulMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const onFormSubmit = async(e) => {
        e.preventDefault()
        setErrorsInitialValues()
        setSucessfulMessage("")

        const deubomResponse = await fetch('http://localhost:3001')
        const deubomData = await deubomResponse.json()
        console.log(deubomData)

        const isFormValidate = formValidate(cardName, setCardNameError, email, setEmailError, desc, setDescError)
        if(!isFormValidate) {
            return 
        }

        const body = {cardName: cardName, email: email, desc: desc}
        const apiRequest = await createCard(body)
        if(!apiRequest){
            setErrorMessage('Por favor verifique os campos e tente novamente')
            return
        }
        setInputsInitialValues()
        setErrorsInitialValues()
        setSucessfulMessage('The card was created sucessfully')
    }

    const setErrorsInitialValues = () => {
        setCardNameError("")
        setEmailError("")
        setDescError("")
        setErrorMessage("")
    }
    const setInputsInitialValues = () => {
        setCardName("")
        setEmail("")
        setDesc("")
    }

    return (
        <form className="main-form" onSubmit={onFormSubmit}>
            <h2>{sucessfulMessage}</h2>
            <h2>{errorMessage}</h2>
            <div className="form-content">
                <div className="left-form">
                    <div className="input-container">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Insira o nome do card..." value={cardName} onChange={ (e) => setCardName(e.target.value)}/>
                        <span className="input-error-message">{cardNameError}</span>
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Insira o seu e-mail..." value={email} onChange={ (e) => setEmail(e.target.value)}/>
                        <span className="input-error-message">{emailError}</span>
                    </div>
                    <div className="input-container">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" cols="30" rows="8" placeholder="Digite aqui..." value={desc} onChange={ (e) => setDesc(e.target.value)}></textarea>
                        <span className="input-error-message">{descError}</span>
                    </div>
                </div>
                <div className="right-form">
                    <div className="checkboxs-content">
                        <div className="checkboxs-container">
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
                        <span className="input-error-message">{emailError}</span>
                    </div>
                    <div className="input-container">
                        <label htmlFor="dropdown">Dropdown</label>
                        <input type="text" name="dropdown" placeholder="Dropdown"/>
                        <span className="input-error-message">{emailError}</span>
                    </div>
                    <div className="tags-container">
                        <label className="testtt" htmlFor="tags">Tags</label>
                        <div className="tag-row">
                            <div className="tag">Web</div>
                            <div className="tag">Ilustration</div>
                            <div className="tag">Graphics</div>
                            <div className="tag">UI</div>
                        </div>
                        <div className="tag-row">
                            <div className="tag">Design</div>
                            <div className="tag">App</div>
                            <div className="tag">Iphone</div>
                            <div className="tag">Interface</div>
                        </div>
                        <div className="tag-row">
                            <div className="tag">Icon</div>
                            <div className="tag">Web Design</div>
                        </div>
                        <span className="input-error-message">{emailError}</span>
                    </div>
                </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Index