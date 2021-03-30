import { useState } from 'react'
import Api from '../../Api'
import './style.css'

const Index = () => {
    const [cardName, setCardName] = useState("")
    const [email, setEmail] = useState("")
    const [desc, setDesc] = useState("")

    const fetchApi = async(e) => {
        e.preventDefault()
        try {
            const body = {
                cardName: cardName,
                email: email,
                desc: desc
            }
            
            Api.createCard(body)


        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <form onSubmit={fetchApi}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" required value={cardName} onChange={ (e) => setCardName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" required value={email} onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" cols="30" rows="10" placeholder="Description" required value={desc} onChange={ (e) => setDesc(e.target.value)}></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Index