import { useState } from 'react'
import Api from '../../Api'
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

        const isFormValidate = formValidate(cardName, setCardNameError, email, setEmailError, desc, setDescError)
        if(!isFormValidate) {
            return 
        }

        const body = {cardName: cardName, email: email, desc: desc}
        const apiRequest = await Api.createCard(body)
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
        <form onSubmit={onFormSubmit}>
            <h2>{sucessfulMessage}</h2>
            <h2>{errorMessage}</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" value={cardName} onChange={ (e) => setCardName(e.target.value)}/>
                <p>{cardNameError}</p>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                <p>{emailError}</p>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" cols="30" rows="10" placeholder="Description" value={desc} onChange={ (e) => setDesc(e.target.value)}></textarea>
                <p>{descError}</p>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Index