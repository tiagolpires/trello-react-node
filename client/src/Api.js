let baseUrl = 'http://localhost:3001'
if(process.env.NODE_ENV === 'production') {
    baseUrl = 'https://trello-react-node.herokuapp.com'
}

const createCard = async(body) => {
    const response = await fetch(`${baseUrl}/api/card`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })
    return response.ok
}

export default createCard