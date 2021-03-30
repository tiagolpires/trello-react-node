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
    const [sucessfulCreate, setSucessfulCreate] = useState("")

    const setInitialValue = () => {
        setCardNameError("")
        setEmailError("")
        setDescError("")
    }

    const fetchApi = async(e) => {
        e.preventDefault()
        setInitialValue()
        setSucessfulCreate("")

        const isValidate = formValidate(cardName, setCardNameError, email, setEmailError, desc, setDescError)

        if(isValidate) {
            const body = {
                cardName: cardName,
                email: email,
                desc: desc
            }
            Api.createCard(body)
            setInitialValue()
            setSucessfulCreate('The card was created sucessfully')
        }
    }

    return (
        <form onSubmit={fetchApi}>
            <h2>{sucessfulCreate}</h2>
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