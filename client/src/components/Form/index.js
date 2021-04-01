import { useState } from 'react'
import Tags from '../Tags'
import Checkboxes from '../Checkboxes'
import Input from '../Input'
import TextArea from '../TextArea'
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
    const [selectedTags, setSelectedTags] = useState([])
    const [selectedTagsError, setSelectedTagsError] = useState("")
    const [sucessfulMessage, setSucessfulMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const onFormSubmit = async(e) => {
        e.preventDefault()
        setErrorsInitialValues()
        setSucessfulMessage("")

        const isFormValidate = formValidate(cardName, setCardNameError, email, setEmailError, desc, setDescError, selectedTags, setSelectedTagsError)
        if(!isFormValidate) {
            return 
        }

        const body = {cardName: cardName, email: email, desc: desc, tags: selectedTags}
        const apiRequest = await createCard(body)
        if(!apiRequest){
            setErrorMessage('Por favor verifique os campos e tente novamente')
            return
        }
        setInputsInitialValues()
        setErrorsInitialValues()
        setSucessfulMessage('O Card foi criado com sucesso')
    }

    const setErrorsInitialValues = () => {
        setCardNameError("")
        setEmailError("")
        setDescError("")
        setErrorMessage("")
        setSelectedTagsError("")
    }
    const setInputsInitialValues = () => {
        setCardName("")
        setEmail("")
        setDesc("")
        setSelectedTags([])
        document.querySelectorAll('.selected').forEach(item => item.classList.remove('selected'))
    }

    return (
        <form className="main-form" onSubmit={onFormSubmit}>
            {sucessfulMessage ? <span className="sucess-message">{sucessfulMessage}</span> : null}
            {errorMessage ? <span className="error-message">{errorMessage}</span> : null}
            <div className="form-content">
                <div className="left-form">
                    <Input name={"name"} labelValue={"Nome"} placeholder={"Insira o nome do card"} inputValue={cardName} setValue={setCardName} showError={cardNameError} />
                    <Input name={"email"} labelValue={"Email"} placeholder={"Insira o seu e-mail"} inputValue={email} setValue={setEmail} showError={emailError} />
                    <TextArea name={"description"} labelValue={"Descrição"} placeholder={"Insira uma descrição"} inputValue={desc} setValue={setDesc} showError={descError} />
                </div>
                <div className="right-form">
                    <Checkboxes/>
                    <div className="input-container">
                        <label htmlFor="dropdown">Dropdown</label>
                        <input type="text" name="dropdown" placeholder="Dropdown"/>
                        <span className="input-error-message">{emailError}</span>
                    </div>
                    <Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} selectedTagsError={selectedTagsError}/>
                </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Index