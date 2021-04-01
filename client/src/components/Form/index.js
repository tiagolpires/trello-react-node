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

    const handleTagClick = async (tag) => {
        if(tag.classList.contains("selected")){
            tag.classList.remove('selected')
            setSelectedTags(selectedTags.filter(item => item !== tag.id))
            return
        }
        tag.classList.add('selected')
        setSelectedTags([...selectedTags, tag.id])
    }

    return (
        <form className="main-form" onSubmit={onFormSubmit}>
            {sucessfulMessage ? <span className="sucess-message">{sucessfulMessage}</span> : null}
            {errorMessage ? <span className="error-message">{errorMessage}</span> : null}
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
                            <div className="tag" id="606333d89bc0fe7aaecd1678" onClick={(e) => handleTagClick(e.target)}>Web</div>
                            <div className="tag" id="6065143664acd42705927100" onClick={(e) => handleTagClick(e.target)}>Ilustration</div>
                            <div className="tag" id="6065143f1da7ef271325f22f" onClick={(e) => handleTagClick(e.target)}>Graphics</div>
                            <div className="tag" id="6065144b8f9676593214f819" onClick={(e) => handleTagClick(e.target)}>UI</div>
                        </div>
                        <div className="tag-row">
                            <div className="tag" id="6065145483a7a52326a445da" onClick={(e) => handleTagClick(e.target)}>Design</div>
                            <div className="tag" id="6065145ba5fd4a1f6b89837f" onClick={(e) => handleTagClick(e.target)}>App</div>
                            <div className="tag" id="606514623e4dec8e1dd767de" onClick={(e) => handleTagClick(e.target)}>Iphone</div>
                            <div className="tag" id="6065146c1c2cdb3f38e11d35" onClick={(e) => handleTagClick(e.target)}>Interface</div>
                        </div>
                        <div className="tag-row">
                            <div className="tag" id="60651476a781033f70e57fdf" onClick={(e) => handleTagClick(e.target)}>Icon</div>
                            <div className="tag" id="60651485359098187546e344" onClick={(e) => handleTagClick(e.target)}>Web Design</div>
                        </div>
                        <span className="input-error-message">{selectedTagsError}</span>
                    </div>
                </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Index